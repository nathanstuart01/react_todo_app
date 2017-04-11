Rails.application.routes.draw do
  root 'home#index'
  get '/shopping', to: 'home#shopping_list'

  namespace :api, defaults: { format: :json } do
    resources :items, except: [:new, :edit]
  end
end
