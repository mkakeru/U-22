class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:index, :update, :destroy]
  before_action :set_user, only: [:update, :destroy]

  def index
    users = User.find(current_user.uid)
    render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
  end

  def update
    if @user.update(user_params)
      render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
    else
      render json: { status: 'ERORR', message: 'Not updated', data: @user.errors }
    end
  end

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

      @user.destroy
      render json: { status: 'SUCCESS', message: 'Deleted the user', data: @user }
    else
      render json: { status: 'ERROR' }
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:user_helper_flag)
    end

end
