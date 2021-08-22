class Api::V1::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  include Devise::Controllers::Rememberable

  def omniauth_success
    get_resource_from_auth_hash
    @token = @resource.create_token
    create_auth_params

    if resource_class.devise_modules.include?(:confirmable)
      # don't send confirmation email!!!
      @resource.skip_confirmation!
    end

    sign_in(:user, @resource, store: false, bypass: false)

    # 動作確認用
    # if @resource.save!
    #   update_auth_header
    #   yield @resource if block_given?
    #   render json: @resource, status: :ok
    # else
    #   render json: { message: "failed to login" }, status: 500
    # end

    # @resource.save!

    # yield @resource if block_given?

    # render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)


    if @resource.save!
      update_auth_header
      yield @resource if block_given?

      if @is_new
        redirect_to "https://localhost:3000/sign_up"
      else
        redirect_to "https://localhost:3000"
      end
      # render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)
    else
      redirect_to "#{Settings.url}/api/v1/auth/line"
    end

  end

  protected
  def get_resource_from_auth_hash
    @is_new = false
    # find or create user by provider and provider uid

    # ================================================
    # Update here to Model Class
    # from :
    #    @resource = resource_class.where(
    # to:
    @resource = User.where({
      uid:      auth_hash&.[]('uid'),
      provider: auth_hash&.[]('provider')
    }).first_or_initialize

    if @resource.new_record?
      handle_new_resource
      @is_new = true
    end

    # sync user info with provider, update/generate auth token
    assign_provider_attrs(@resource, auth_hash)

    # assign any additional (whitelisted) attributes
    if assign_whitelisted_params?
      extra_params = whitelisted_params
      @resource.assign_attributes(extra_params) if extra_params
    end

    @resource, @is_new
  end
end
