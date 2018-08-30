Rails.application.routes.draw do
  resources :lost_pet_pictures
  resources :found_pet_pictures
  resources :found_pet_comments
  resources :found_pets
  resources :lost_pet_comments
  resources :lost_pets
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
