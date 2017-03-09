# This is important, do not remove, and ensure it's included in every test or
# ensure this file is included
ENV["RACK_ENV"] = "test"

require "bundler/setup"

require "pry"

require "minitest/autorun"
require "minitest/pride"
require "minitest/focus"
require "rack/test"

require_relative "../app/app"
require_relative "../db/migrations/1_create_tasks_table"

begin
  CreateTasksTable.migrate(:down)
rescue ActiveRecord::StatementInvalid
end
CreateTasksTable.migrate(:up)
