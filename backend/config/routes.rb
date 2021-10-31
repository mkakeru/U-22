Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/auth'

  post '/callback', to: 'line_bots#callback'

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        :omniauth_callbacks => "api/v1/omniauth_callbacks"
      }
      as :user do
        delete '/users/sign_out', to: 'sessions#destroy', as: :destroy_user_session
      end
      resources :users, only: %i[index update destroy]
      resources :user_details, only: %i[index create show update]
      resources :helps
      resources :emergency_contacts

      post 'phones/send_sms', to: 'phones#send_sms'
      post 'help_button', to: 'help_buttons#send_help_message'
    end
  end
end
