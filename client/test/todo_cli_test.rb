require_relative "test_helper"
require "json"

class TodoCliTest < Minitest::Test

  def teardown
    Task.delete_all
    List.delete_all
  end

  def test_task_exists
    assert Task
  end

  def test_list_exits
    assert List
  end

  def test_new_task
    TodoCli.new(["create_task", "Laundry", "Weekend"])
    assert_equal 1, Task.all.length
  end

  def test_create_list
    TodoCli.new(["create_list", "Weekend"])
  end

  def test_add_task_to_list
      stub_request(:get, "http://localhost:4567/lists/1/tasks/1").to_return(body: File.read("./stubbed_requests/list_tasks.json"), headers: { "Content-Type" => "application/json" })
      Development.new.add_task_to_list("1", "1")
  end

  def test_complete
    stub_request(:patch, "http://localhost:4567/tasks/1").to_return(body: File.read("./stubbed_requests/complete_task.json"), headers: { "Content-Type" => "application/json" })
    assert_equal 1, Development.new.complete_tasks("1")["id"]
  end

  def test_display_all
    stub_request(:get, "http://localhost:4567/tasks").to_return(body: File.read("./stubbed_requests/get_tasks.json"), headers: { "Content-Type" => "application/json" })
    assert_equal 1, Development.new.get_tasks["id"]
  end
end
