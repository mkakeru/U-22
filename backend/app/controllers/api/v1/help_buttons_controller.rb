class Api::V1::HelpButtonsController < ApplicationController
  before_action :set_user
  before_action :set_helper

  def send_help_message

  end

  private

  def set_user
    @user = User.find(params[:uid])
  end

  def set_helper
    @helper = User.find(params[:helper_id])
  end

end
