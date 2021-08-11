Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/auth'

  post '/callback', to: 'line_bots#callback'

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        :omniauth_callbacks => "api/v1/omniauth_callbacks",
        :registrations => "api/v1/registrations"
      }, via: [:get, :post]
      resources :users, only: %i[update]
      resources :user_details, only: %i[index create show update]
      resources :helps
      resources :emergency_contacts
      resources :phones do
        member do
          get 'send_sms'
        end
      end
      post 'help_button', to: 'help_buttons#send_help_message'
    end
  end
end
