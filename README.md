# Mobile Maultasche Website

Source code for [http://mobilemaultaschen.de/](http://mobilemaultaschen.de/)

### How to

1. Install bundler `[sudo] gem install bundler`
2. Install dependencies `bundle install`. If some error like this `fatal error: 'openssl/ssl.h' file not found` occurs while installing the `eventmachine` gem, configure bundler to use openssl headers from homebrew `bundle config build.eventmachine --with-cppflags=-I$(brew --prefix openssl)/include`
3. Run `bundle exec jekyll serve`
4. Edit entries in `./_posts`. Website is rebuild automatically when changes are made
5. Submit pull request
