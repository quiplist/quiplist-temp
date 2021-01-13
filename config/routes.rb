Rails.application.routes.draw do
  root to: 'home#index'



  scope 'admin' do
    resources :events, except: [:new, :edit] do
      put :upload_brochure, to: 'events#upload_brochure', on: :member
      get :draw_raffles, to: 'events#draw_raffles', on: :member
      resources :guest_lists
      # resources :raffles
      # resources :questionnaires
    end
  end

  # devise_for :users, skip: [:sessions]
  # as :user do
  #   get 'sign_in', to: 'devise/sessions#new'
  #   post 'sign_in', to: 'devise/sessions#create'
  #   get 'sign_out', to: 'devise/sessions#destroy'
  #   #root to: 'devise/sessions#new', as: 'authenticated_user_root'
  # end
  devise_for :admins
  devise_for :users, controllers: { registrations: 'users/registrations' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
