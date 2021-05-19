source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7'

gem 'rails', '~> 6.0.2'
gem 'sqlite3', '~> 1.4'
gem 'puma', '~> 4.3'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'


gem 'rails-i18n', '~> 6.0.0'
gem 'kaminari'

gem 'image_processing', '~> 1.2'
gem 'mini_magick'
gem "aws-sdk-s3", require: false

# Uncomment to use haml
# gem 'haml'

gem 'rest-client'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'


# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Uncomment to use haml
  # gem "haml-rails"
  gem 'foreman'
  gem 'web-console'
  gem 'pry'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'awesome_print'
  gem 'listen'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'letter_opener'
  gem 'rubocop', require: false

  # # Capistrano
  # gem 'capistrano'
  # gem 'capistrano-rvm'
  # gem 'capistrano-bundler'
  # gem 'capistrano-passenger'
  # gem 'capistrano-rails'
  # gem 'capistrano-rails-collection'
  # gem 'capistrano-ssh-doctor'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

group :production do
  #gem 'pg'
  gem 'mini_racer'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
