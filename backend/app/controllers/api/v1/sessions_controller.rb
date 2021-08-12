class Api::V1::SessionsController < DeviseTokenAuth::ApplicationController
  skip_before_action :verify_signed_out_user, raise: false

  def destroy
    # remove auth instance variables so that after_action does not run
    @resource = User.where({
      uid:      current_user&.uid,
      provider: current_user&.provider
    }).first_or_initialize
    user = remove_instance_variable(:@resource) if @resource
    client = @token.client
    @token.clear!

    if user && client && user.tokens[client]
      user.tokens.delete(client)
      user.save!

      if DeviseTokenAuth.cookie_enabled
        # If a cookie is set with a domain specified then it must be deleted with that domain specified
        # See https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html
        cookies.delete(DeviseTokenAuth.cookie_name, domain: DeviseTokenAuth.cookie_attributes[:domain])
      end

      yield user if block_given?

      render_destroy_success
    else
      render_destroy_error
    end
  end
  private

    def render_destroy_success
      render json: {
        status: 'success',
        message: I18n.t('devise_token_auth.registrations.account_with_uid_destroyed')
      }
    end

    def render_destroy_error
      render json: {
        message: I18n.t("devise_token_auth.sessions.user_not_found")
      }, status: 404
    end

end
