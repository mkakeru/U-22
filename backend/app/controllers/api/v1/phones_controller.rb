class Api::V1::PhonesController < ApplicationController
  before_action :set_user, only: [:send_sms]
  before_action :set_emergency_contacts, only: [:send_sms]

  def send_sms
    @emergency_contacts.each do |emergency_contact|
      # 電話番号を+81にフォーマット(gem'phony')
      send_phone_number = PhonyRails.normalize_number(emergency_contact.emergency_contact_tel, country_code:'JP')

      # twilioのMessagingAPIを使用してSMSに認証コード送信
      begin
        client = Twilio::REST::Client.new
        message = "#{@user.name}さんがヘルプボタンを押しました。\n"
        message += "https://www.google.com/maps?q=#{params[:lat]},#{params[:lng]}"

        result = client.messages.create(
          from: Rails.application.credentials.twilio[:TWILIO_PHONE_NUMBER],
          to:   send_phone_number,
          body: message
        )
        render json: { status: 'SUCCESS', message: 'Sent a help message'}
      rescue Twilio::REST::RestError => e
        @messages = "エラーコード[#{e.code}] ：” #{e.message}”"
        render json: { status: 'ERORR', message: "Couldn't send", data: "エラーコード[#{e.code}] ： #{e.message}" }
      end
    end
  end


  private

  def set_user
    @user = User.find(params[:uid])
  end

  def set_emergency_contacts
    @emergency_contacts = EmergencyContact.where(uid: params[:uid])
  end

end
