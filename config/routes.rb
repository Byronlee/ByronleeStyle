ByroStyle::Application.routes.draw do
  root to: "dashbord#index"
  get "dashbord/resume"
  post 'dashbord/message'
  get 'dashbord/support'
  match '/:anything', to: "dashbord#index", as: :error, via: :get, :constraints => {:anything => /.*/}
end
