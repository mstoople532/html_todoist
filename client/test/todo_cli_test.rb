require_relative "test_helper"

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
    Task.create(name: "Laundry")
    List.create(name: "Weekend")
    TodoCli.new(["add_task", "Weekend", "Laundry"])
    assert_equal 1, List.where(name: "Weekend").count
  end

  def test_complete
    laundry = Task.create(name: "Laundry")
    assert_in_delta Time.now, laundry.complete, 1
  end
end
