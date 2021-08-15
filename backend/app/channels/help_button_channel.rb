class HelpButtonChannel < ApplicationCable::Channel
  def subscribed
    stream_from "help_button_channel"
    ActionCable.server.broadcast("help_button_channel", "#{params[:room]}")
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
