require "httparty"
require "pry"

class Development
  def get_tasks
    HTTParty.get("HTTP://localhost:4567/tasks")
  end

  def complete_tasks(task_id)
    HTTParty.patch("HTTP://localhost:4567/tasks/#{task_id}")
  end

  def add_task_to_list(list_id, task_id)
    HTTParty.get("HTTP://localhost:4567/lists/#{list_id}/tasks/#{task_id}")
  end

  def create_new_task
    HTTParty.post("HTTP://localhost:4567/tasks/")
  end

  def create_new_list
    HTTParty.post("HTTP://localhost:4567/lists/")
  end
end
