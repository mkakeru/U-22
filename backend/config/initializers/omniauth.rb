Rails.application.config.middleware.use OmniAuth::Builder do
  provider :line, Rails.application.credentials.line[:LINE_LOGIN_CHANNEL_ID], Rails.application.credentials.line[:LINE_LOGIN_CHANNEL_SECRET]
  OmniAuth.config.allowed_request_methods = [:get, :post]
  OmniAuth.config.silence_get_warning = true

end
