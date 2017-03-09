# This file is testing the Client
require_relative "test_helper"

class TodoCliTest < Minitest::Test
  def test_will_puts_to_stdout_args_passed_in
    skip
    assert_output(/I should make a task/) do
      TodoCli.new(["new", "i am a task"])
    end
  end
end
