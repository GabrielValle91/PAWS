Rails.application.routes.draw do
  namespace :api do
    resources :lost_pet_pictures, except: [:new, :edit]
    resources :found_pets, except: [:new, :edit]
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
