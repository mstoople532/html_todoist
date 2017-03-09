# Feel free to modify this class but do not rename it.
class TodoCli
  attr_reader :args
  def initialize(args)
    @args = args

    # Extract the "subcommand"
    case @args.first
    when "create_task"
      create_task
    when "create_list"
      create_list
    else
      usage
    end
  end

  def create_task
    # Do work to create a task here.
  end

  def create_list
    # Do work to create a list here.
  end

  def usage
    # Tell a user how to use this tool.
  end
end
