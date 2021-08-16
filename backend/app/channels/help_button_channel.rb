class HelpButtonChannel < ApplicationCable::Channel
  def subscribed
    stream_from "help_button_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def sendToHelper(data)
    ActionCable.server.broadcast("help_button_channel", data)
  end

end
