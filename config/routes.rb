Rails.application.routes.draw do
  namespace :api do
    resources :lost_pets, except: [:new, :edit]
    resources :found_pets, except: [:new, :edit]
    resources :found_pet_comments, only: [:create, :delete]
    resources :lost_pet_comments, only: [:create, :delete]
    resources :users
  end
end
