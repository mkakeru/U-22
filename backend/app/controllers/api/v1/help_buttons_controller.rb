class Api::V1::HelpButtonsController < ApplicationController
  require 'line/bot'
  before_action :set_user
  before_action :set_helper

  def send_help_message
    @user_detail = @user.user_detail
    gender = @user_detail.user_detail_gender == 0 ? "その他" : @user_detail.user_detail_gender == 1 ? "女性" : "男性"
    message = {
      type: 'text',
      text: "#{@user.name}さんが助けを求めています。\n性別:#{gender}"
    }
    response = client.push_message(@helper.uid, message)
    if response.code == "200"
      render json: { status: 'SUCCESS', message: 'Sent a help message', data: response }
		else
			render json: { status: 'ERROR', data: response }
    end
  end

  private

  def set_user
    @user = User.find(params[:uid])
  end

  def set_helper
    @helper = User.find(params[:helper_id])
  end

  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret  = Rails.application.credentials.line[:LINE_BOT_CHANNEL_SECRET]
      config.channel_token = Rails.application.credentials.line[:LINE_BOT_ACCESS_TOKEN]
    }
  end

end
