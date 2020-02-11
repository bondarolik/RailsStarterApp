# README

![Ruby on Rails starter with Webpacker, Twitter Bootstrap, ActionText and ActiveStorage ready to use](https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/ruby-on-rails.jpg?1566863840 "Rails with Webpacker")

This is a Rails starter app. Just clone, fix app name and start to use it. This app will save you some time setting up new rails application.

* Rails 6.0.2
* Webpacker install and ready to use
* Twitter Bootstrap 4.4 (jquery, popper.js)
* Fontawesome latest
* Controller concerns
* ActionText and ActionStorage ready

### Howto

1. Clone
2. Change app name (use global find in your project for `RailsScratchApp` and replace it by your app name)
3. Run migrations, yarn upgrade and bundle install
4. Start with `foreman`

### Concerns and controllers

Checkout branch `examples/concerns` and PostsController

```ruby
class PostsController < ApplicationController
  include DryController
  include Response

  private
    def resource_params
      params.require(:post).permit(:id, :title ,:body)
    end
end
```

### Credits

V. Bondaruk, RubyDroids.com
