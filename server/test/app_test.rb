require_relative "test_helper"

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    App
  end

  def teardown
    Task.delete_all
  end

  def test_task_exists
    assert Task
  end

  def test_list_all_tasks
    Task.create(name: "Laundry")
    Task.create(name: "Get me some tasty cakes")
    response = get "/tasks"
    assert_equal 2, JSON.parse(response.body).count
  end

  def test_post_tasks
    response = post "/tasks", { name: "tastycakes", priority: "high" }.to_json
    assert response.ok?
    assert_equal 1, Task.where(name: "tastycakes").count
  end

  def test_find_task_by_id
    tastycakes = Task.create(name: "Get me some tasty cakes")
    response = get "/tasks/#{tastycakes.id}"
    assert_equal tastycakes.id, JSON.parse(response.body)["id"]
  end

  def test_patch_task
    tastycakes = Task.create(name: "Get me some tasty cakes")
    response = patch "/tasks/#{tastycakes.id}", { name: "Yummy Time", priority: "URGENT!" }.to_json
    assert_equal "Yummy Time", JSON.parse(response.body)["name"]
  end

  def test_delete_task
    tastycakes = Task.create(name: "Get me some tasty cakes")
    delete "/tasks/#{tastycakes.id}"
    assert_raises ActiveRecord::RecordNotFound do
      Task.find(tastycakes.id)
    end
  end

  def test_list_lists
    List.create(name: "Food")
    List.create(name: "Activities")
    response = get "/lists"
    assert_equal 2, JSON.parse(response.body).count
  end
end
