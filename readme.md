# Client and Server repo
This is two apps in one. Your Ruby client in the client folder and the server in the server folder. Be wary of where you are.

## Setup

### First and whenever your backender ask you to.
1. bundler
1. rake db:migrate

### Start the server (from server folder)
1. rackup

### Backenders

# New Things
  1. Database config is located at
  2. Migrations via `rake db:migrate`
  3. Torch db via `rake db:drop`

## Deploying to heroku

1. Ensure you have heroku toolbelt
2. Run `heroku create`
3. Run `heroku addons:create heroku-postgresql:hobby-dev` to add a postgres DB server
3. Run `heroku run "cd server; rake db:migrate"` to migrate your servers database
