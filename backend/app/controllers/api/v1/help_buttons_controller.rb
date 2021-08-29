class Api::V1::HelpButtonsController < ApplicationController
  require 'line/bot'
  before_action :set_user
  before_action :set_helper

  def send_help_message
    @user_detail = @user.user_detail
    gender = @user_detail.user_detail_gender == 0 ? "その他" : @user_detail.user_detail_gender == 1 ? "男性" : "女性"
    if @user_detail.user_detail_stature == 0
      stature = "~130cm"
    elsif @user_detail.user_detail_stature == 6
      stature = "180cm~"
    elsif @user_detail.user_detail_stature >= 1 && @user_detail.user_detail_stature <= 5
      stature_val = @user_detail.user_detail_stature * 10 + 120
      stature = "#{stature_val+1}cm~#{stature_val+10}cm"
    end
    if @user_detail.user_detail_age == 0
      age = "10歳未満"
    elsif @user_detail.user_detail_age == 5
      age = "50歳以上"
    elsif @user_detail.user_detail_age >= 1 && @user_detail.user_detail_age <= 4
      age = "#{@user_detail.user_detail_age * 10}代"
    end
    address = Geocoder.search([params[:lat], params[:lng]])
    message = [{
      type: "text",
      text: "#{@user.name}さんが助けを求めています。\
            \n性別:#{gender}\
            \n身長:#{stature}\
            \n年齢:#{age}\
            \n特徴:#{@user_detail.user_detail_features}"
    },
    {
      type: "location",
      title: "#{@user.name}さんはここにいます。",
      address: address.first.address,
      latitude: params[:lat],
      longitude: params[:lng]
    }]
    if !@user_detail.user_detail_image_path.url.nil?
      message.push(    {
        type: "image",
        originalContentUrl: @user_detail.user_detail_image_path.url,
        previewImageUrl: @user_detail.user_detail_image_path.url
      })
    end
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
