# This is used to select which database to use.
ENV["RACK_ENV"] ||= "development"

require "bundler/setup"
require "sinatra"
require "json"
require "pry"

require_relative "../db/connection"
require_relative "task"
require_relative "list"
require_relative "../db/migrations/1_create_tasks_table.rb"
require_relative "../db/migrations/20170317141552_create_lists_table_migration.rb"
