require "httparty"

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
    when "add_task"
      add_task
    when "complete"
      complete
    when "display_all"
      list_tasks
    else
      usage
    end
  end

  def create_task
    Task.create(name: @args.third, priority: args.fourth)
  end

  def create_list
    List.create(name: @args.second)
  end

  def add_task
    list_to_add_to = List.all.where(name: @args.second).first
    list_to_add_to.add_task(Task.all.where(name: @args.third).first)
  end

  def complete
    task = Task.where(name: @args.second).first
    task.complete
  end
  
  def list_tasks
    Development.new.get_tasks
  end

  def usage
    "Please choose between from create_task, create_list, add_task, complete, or display_all."
  end
end
