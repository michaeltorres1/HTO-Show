Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
  namespace :api, defaults: {format: :json} do
    resources :movies, only: [:index, :show]
    # resources :actors, only: [:show]
    resource :user, only: [:create] 
    resources :favorites, only: [:create]
    resources :profile, only: [:show]

    resources :users, only: [:show] do
      resources :favorites, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end