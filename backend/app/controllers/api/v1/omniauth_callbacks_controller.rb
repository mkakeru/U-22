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

    @resource.save!

    yield @resource if block_given?

    render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)

  end

  protected
  def get_resource_from_auth_hash
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
    end

    # sync user info with provider, update/generate auth token
    assign_provider_attrs(@resource, auth_hash)

    # assign any additional (whitelisted) attributes
    if assign_whitelisted_params?
      extra_params = whitelisted_params
      @resource.assign_attributes(extra_params) if extra_params
    end

    @resource
  end
end
