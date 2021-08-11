class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:update]

  def update
    if @user.update(user_params)
      render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
    else
      render json: { status: 'ERORR', message: 'Not updated', data: @user.errors }
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
