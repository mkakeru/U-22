class Api::V1::UserDetailsController < ApplicationController
  before_action :set_user_detail, only: [:show, :update]

  def index
    user_details = UserDetail.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded user_details', data: user_details }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the user_detail', data: @user_detail }
  end

  def create
    user_detail = UserDetail.new(user_detail_params)
    if user_detail.save
      render json: { status: 'SUCCESS', data: user_detail }
    else
      render json: { status: 'ERROR', data: user_detail.errors }
    end
  end

  def update
    if @user_detail.update(user_detail_params)
      render json: { status: 'SUCCESS', message: 'Updated the user_detail', data: @user_detail }
    else
      render json: { status: 'SUCCESS', message: 'Not updated', data: @user_detail.errors }
    end
  end

  private
    def set_user_detail
      @user_detail = UserDetail.find(params[:id])
    end

    def user_detail_params
      params.permit(:user_id, :user_detail_gender, :user_detail_stature, :user_detail_age,
                    :user_detail_features, :user_detail_image_path, :user_detail_notification_flag)
    end
end
