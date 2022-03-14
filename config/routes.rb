Rails.application.routes.draw do
  
 
  resources :events do 
     resources :comments
     resources :participants
  end

  resources :users

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  get '/users/:id/events', to: 'users#show_user_events'
  post '/users/:id/events/:event_id', to: 'users#add_user_event'
post '/:user_id/:event_id', to: 'participants#create_participant'

end
