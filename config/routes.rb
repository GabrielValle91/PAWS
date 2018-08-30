Rails.application.routes.draw do
  namespace :api do
    resources :lost_pets, except: [:new, :edit]
    resources :found_pets, except: [:new, :edit]
    resources :users
  end
end
