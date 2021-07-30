class LineBotsController < ApplicationController
  require 'line/bot'
  before_action :validate_signature

  # POST '/callback'
  def callback
    body = request.body.read
    events = client.parse_events_from(body)

    events.each { |event|
      case event
      when Line::Bot::Event::Message
        case event.type
        when Line::Bot::Event::MessageType::Text
          message = {
            type: 'text',
            # text: event.message['text']
            text: 'メッセージありがとうございます。'
          }
          client.reply_message(event['replyToken'], message)
        when Line::Bot::Event::MessageType::Image, Line::Bot::Event::MessageType::Video
          # response = client.get_message_content(event.message['id'])
          # tf = Tempfile.open("content")
          # tf.write(response.body)
          client.reply_message(
            event['replyToken'],
            { type: 'text', text: '画像' }
          )
        when Line::Bot::Event::MessageType::Sticker #スタンプが送信されたとき
          client.reply_message(
            event['replyToken'],
            { type: 'text', text: 'スタンプ' }
          )
        end
      end
    }
    render status: 200 , json: nil
  end

  def push

    message = {
        type: 'text',
        text: "○○さんが助けを求めています。"
    }
    user_id =  'U5c5dff22d36437dcbcb5d8e66b3d8c16'
    response = client.push_message(user_id, message)
  end

  private
  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret  = Rails.application.credentials.line[:LINE_BOT_CHANNEL_SECRET]
      config.channel_token = Rails.application.credentials.line[:LINE_BOT_ACCESS_TOKEN]
    }
  end

  def validate_signature
    body = request.body.read
    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      error 400 do 'Bad Request' end
    end
  end

end
