Rails.application.routes.draw do
  
 
  resources :events do 
     resources :comments
     resources :participants
  end

  resources :users

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
