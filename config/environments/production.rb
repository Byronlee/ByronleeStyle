ByronleeStyle::Application.configure do


  config.cache_classes = true
  config.consider_all_requests_local       = true
  config.serve_static_assets = true
  config.assets.compress = true
  config.assets.compile = true
  config.assets.digest = true   
  config.log_level = :warn
  config.logger = Logger.new("#{Rails.root}/log/#{Rails.env}.log")
  config.assets.precompile += %w( application.js )
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify



  
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 587,
    :user_name            => 'lbyronlee',
    :password             => 'lijianghua',
    :authentication       => 'plain',
    :enable_starttls_auto => true
  }
end
