# This is used to select which database to use.
ENV["RACK_ENV"] ||= "development"

require "bundler/setup"
require "sinatra"
require "json"
require "pry"

require_relative "../db/connection"
require_relative "word"
