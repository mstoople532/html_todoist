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

end
