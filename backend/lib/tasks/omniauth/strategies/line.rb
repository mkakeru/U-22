require 'omniauth-oauth2'
module OmniAuth
  module Strategies
    class Line < OmniAuth::Strategies::OAuth2

      # デフォルトだとクエリパラメータがついてエラーになるのでoverride
      def callback_url
        full_host + script_name + callback_path
      end

    end
  end
end
