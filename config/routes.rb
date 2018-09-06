Rails.application.routes.draw do
  namespace :api do
    resources :lost_pets, except: [:new, :edit]
    resources :found_pets, except: [:new, :edit]
    resources :found_pet_comments, only: [:create, :delete]
    resources :lost_pet_comments, only: [:create, :delete]
  end
  post '/login', to: 'sessions#create'
  post '/signup', to: 'sessions#signup'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
