Rails.application.routes.draw do
  namespace :api do
    resources :menus do
      resources :menu_items
    end
  end
end
