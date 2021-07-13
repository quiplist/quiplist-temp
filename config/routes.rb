Rails.application.routes.draw do
  use_doorkeeper
  get 'errors/show'
  get 'errors/unauthorized'
  root to: 'home#welcome'
  get '/events/:event_code', to: 'home#index', as: :home
  get '/events/:event_code/thank_you', to: 'home#thank_you', as: :thank_you
  get '/events/:event_code/denied', to: 'home#denied', as: :denied
  get '/events/:event_code/disabled', to: 'home#disabled', as: :disabled
  get '/find_event', to: 'home#find_event', as: :find_event
  get '/profile', to: 'home#profile', as: :profile
  put '/profile', to: 'home#update_profile', as: :update_profile
  get '/forgot_password', to: 'home#forgot_password', as: :forgot_password
  post '/reset_password', to: 'home#reset_password', as: :reset_password
  get '/contact_us', to: 'home#contact_us', as: :contact_us
  get '/about_us', to: 'home#about_us', as: :about_us
  get '/events/:event_code/expo', to: 'home#expo', as: :expo
  get '/events/:event_code/games/memory_game', to: 'games#memory_game', as: :memory_game
  get '/events/:event_code/games/fishing_boat', to: 'games#fishing_boat', as: :fishing_boat
  get '/events/:event_code/games/test_game', to: 'games#test_game', as: :test_game

  scope 'admins' do
    get '/forgot_password', to: 'admins#forgot_password', as: :admin_forgot_password
    post '/forgot_password', to: 'admins#reset_forgot_password', as: :admin_reset_password
    get '/dashboard', to: 'admins#dashboard', as: :admin_dashboard
    resources :events, except: [:new, :edit] do
      put :upload_brochure, to: 'events#upload_brochure', on: :member
      get :launch, to: 'events#launch', on: :member
      get :expo, to: 'events#expo', on: :member

      resources :guest_lists do
        post :set_status, on: :collection
        post :set_raffle_status, on: :collection
        get :reset_raffle_statuses, on: :collection
        get :download_csv, on: :collection
      end
      resources :raffles, except: [:index]
      resources :questionnaires, except: [:index] do
        get '/pinned/:answer_id', to: 'questionnaires#pinned', on: :member, as: :pinned_answer
      end
      resources :feed_backs, except: [:index] do
        get :download_csv, on: :member
      end
    end
    resources :admins do
      post :create_admin_events, on: :member
      delete :destroy_admin_events, on: :member
      put :reset_password, on: :member
      get :profile, on: :collection
      put :profile, to: 'admins#update_profile', on: :collection
      get :change_password, on: :collection
      put :change_password, to: 'admins#update_password', on: :collection
    end
    resources :users, except: [:new, :edit, :create, :update, :destroy] do
      put :reset_password, on: :member
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :reactions, only: [:create] do
        delete :destroy, on: :collection
      end
      resources :chats, only: [:index, :create]
      resources :announcements, only: [:index, :create, :update]
      get '/fetch_current_user', to: 'users#fetch_current_user', as: :fetch_current_user
      resources :events, only: [:show, :update]
      resources :raffles, only: [:index, :show, :update]
      resources :questionnaires, only: [:update]
      resources :guest_lists, only: [:index, :show]
      resources :answers, only: [:create]
      get '/fetch_current_event/:id', to: 'events#fetch_current_event', as: :fetch_current_event

      resources :game_scores, only: [:create, :index, :show, :update]
      resources :users, only: [:show]
      resources :ratings, only: [:index, :create]
    end
  end

  # devise_for :users, skip: [:sessions]
  # as :user do
  #   get 'sign_in', to: 'devise/sessions#new'
  #   post 'sign_in', to: 'devise/sessions#create'
  #   get 'sign_out', to: 'devise/sessions#destroy'
  #   #root to: 'devise/sessions#new', as: 'authenticated_user_root'
  # end
  devise_for :admins, controllers: { sessions: 'admins/sessions' }, :skip => [:registrations]
    as :admin do
    get 'admins/edit' => 'admins/registrations#edit', :as => 'edit_admin_registration'
    put 'admins' => 'admins/registrations#update', :as => 'admin_registration'
  end
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
  # %w( 404 422 500 503 ).each do |code|
  #   match code, to: "errors#show", code: code
  # end
  get '/unauthorized', to: "errors#unauthorized"
  mount ActionCable.server => '/cable'
end
