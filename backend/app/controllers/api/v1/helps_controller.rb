class Api::V1::HelpsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_help, only: [:show, :update, :destroy]

  def index
    helps = Help.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded helps', data: helps }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the help', data: @help }
  end

  def create
    help = Help.new(help_params)
    if help.save
      render json: { status: 'SUCCESS', data: help }
    else
      render json: { status: 'ERORR', data: help.errors }
    end
  end

  def update
    if @help.update(help_params)
      render json: { status: 'SUCCESS', message: 'Updated the help', data: @help }
    else
      render json: { status: 'ERORR', message: 'Not updated', data: @help.errors }
    end
  end

  def destroy
    @help.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the help', data: @help }
  end

  private

    def set_help
      @help = Help.find(params[:id])
    end

    def help_params
      params.permit(:user_id, :help_content)
    end

end
