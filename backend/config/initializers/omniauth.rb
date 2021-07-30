Rails.application.config.middleware.use OmniAuth::Builder do
  require 'omniauth/strategies/line'

  OmniAuth.config.allowed_request_methods = [:get, :post]
  OmniAuth.config.silence_get_warning = true
end
