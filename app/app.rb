require_relative "app_helper"

class App < Sinatra::Base
  BOOT_TIME = Time.now

  # You can delete this route but you should nest your endpoints under /api
  get "/" do
    erb :"home.html"
  end

  get "/tasks" do
    @tasks = Task.all
    erb :"tasks.html"
  end

  get "/tasks/new" do
    erb :"new_task.html"
  end

  post "/tasks" do
    Task.create(params)
    redirect to("/tasks")
    erb :"new_task.html"
  end

  # get "/tasks/complete" do
  #   completed_tasks = Task.all
  #   to_be_response = completed_tasks.select do |el|
  #     if el.completed_at
  #       true
  #     end
  #   end
  #   body to_be_response.to_json
  # end

  # get "/tasks/:id" do
  #   body Task.find(params["id"]).to_json
  # end

  patch "/tasks/:id" do
    task = Task.find(params["id"])
    task.update
  end

  # delete "/tasks/:id" do
  #   @task = Task.find(params["id"])
  #   @task.destroy
  # end

  get "/lists" do
    @lists = List.all
  end

  post "/lists" do
    List.create(params)
    redirect to("/lists")
  end

  get "/lists/:name" do
    List.where(params["name"])
  end

  get "/lists/:list_id/tasks/:task_id" do
    task_to_update = Task.find(params["task_id"])
    task_to_update.list_id = params["list_id"].to_i
    body task_to_update.to_json
  end

  get "/lists/:list_id/tasks" do
    body Task.where(list_id: params["list_id"]).to_json
  end

  # patch "/lists/:id" do
  #   payload = JSON.parse(request.body.read)
  #   list = List.find(params["id"])
  #   list.update(payload)
  #   body list.to_json
  # end

  # delete "/lists/:id" do
  #   list = List.find(params["id"])
  #   list.destroy
  #   body list.to_json
  # end

  # If this file is run directly boot the webserver
  run! if app_file == $PROGRAM_NAME
end
