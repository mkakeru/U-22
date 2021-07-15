Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :user_details, only: %i[index create show update]
      resources :helps,        only: %i[index create show update destroy]
    end
  end
end
