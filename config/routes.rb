Rails.application.routes.draw do
  root to: 'home#welcome'
  get '/events/:event_code', to: 'home#index', as: :home
  get '/find_event', to: 'home#find_event', as: :find_event

  scope 'admin' do
    resources :events, except: [:new, :edit] do
      put :upload_brochure, to: 'events#upload_brochure', on: :member
      get :draw_raffles, to: 'events#draw_raffles', on: :member
      put :draw_winner, to: 'events#draw_winner', on: :member
      resources :guest_lists do
        post :set_status, on: :collection
        post :batch_approved, on: :collection
        post :batch_denied, on: :collection
        post :set_raffle_status, on: :collection
        post :batch_eligible, on: :collection
        post :batch_not_eligible, on: :collection
        get :reset_raffle_statuses, on: :collection
      end
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
  # devise_for :employees, path: 'dashboard/employees', skip: [:sessions]
  # as :employee do
  #   get 'login', to: 'devise/sessions#new', as: :new_app_account_session
  #   post 'login', to: 'devise/sessions#create', as: :app_account_session
  #   get 'logout', to: 'devise/sessions#destroy', as: :destroy_app_account_session
  #   root to: 'devise/sessions#new'
  # end

  devise_for :users, skip: [:sessions, :registrations]
  as :user do
    get '/events/:event_code/sign_in', to: 'users/sessions#new', as: :new_user_session
    post '/events/:event_code/sign_in', to: 'users/sessions#create', as: :user_session
    get 'sign_out', to: 'users/sessions#destroy', as: :destroy_user_session

    get 'users/cancel', to: 'users/registrations#cancel', as: :cancel_user_registration
    get '/events/:event_code/sign_up', to: 'users/registrations#new', as: :new_user_registration
    get 'users/edit', to: 'users/registrations#edit', as: :edit_user_registration
    patch 'users', to: 'users/registrations#update', as: :user_registration_patch
    put 'users', to: 'users/registrations#update', as: :user_registration_put
    delete 'users', to: 'users/registrations#destroy', as: :user_registration_delete
    post '/events/:event_code/users', to: 'users/registrations#create', as: :user_registration
  end
  # devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
