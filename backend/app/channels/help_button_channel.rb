class HelpButtonChannel < ApplicationCable::Channel
  def subscribed
    if !params.empty? && current_user.is_helper?(params['user_helper_flag'])
      stream_from "help_button_channel_#{params['user_helper_flag']}"
    else
      reject
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def sendToHelper(data)
    ActionCable.server.broadcast "help_button_channel_#{data.user_helper_flag}", data: data
    #! SMS送信
  end
end
