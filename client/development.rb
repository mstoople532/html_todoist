require "httparty"
require "pry"

class Development
  def get_tasks
    HTTParty.get("HTTP://localhost:4567/tasks")
  end
end
