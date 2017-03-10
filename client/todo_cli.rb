require_relative "../server/db/migrations/1_create_tasks_table"

class TodoCli
  attr_reader :args
  def initialize(args)
    @args = args

    # Extract the "subcommand"
    case @args.first
    when "install"
      CreateTasksTable.migrate(:up)
      CreateListsTable.migrate(:up)
    when "create_task"
      create_task
    when "create_list"
      create_list
    when "add_task"
      add_task
    when "complete"
      complete
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

  def usage
    # Tell a user how to use this tool.
  end
end
