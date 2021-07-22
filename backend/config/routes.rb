Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/auth'
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        :omniauth_callbacks => "omniauth_callbacks"
      }, via: [:get, :post]
      resources :users
      resources :user_details, only: %i[index create show update]
      resources :helps
      resources :emergency_contacts
      resources :phones do
        member do
          get 'send_sms'
        end
      end
    end
  end
end
