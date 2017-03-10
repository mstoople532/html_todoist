# Todo List with API -Client
This program allows you to create tasks and lists to organize what you need to do.

## Create Task
```ruby
./todo create_task "Laundry" "Urgent"
```
To create a task start with the ./todo then put the command create_task followed by the name and the priority of the task.

## Create List

```ruby
./todo create_list "Weekend Chores"
```

To create a list start with the ./todo then the command create_list followed by the name of the list.

## Add Task to List

```ruby
./todo add_task "Weekend Chores" "Laundry"
```

To add a task to a list start with the ./todo, followed by the command add_task, then the name of the list and the name of the task.

## Complete Task

```ruby
./todo complete "Laundry"
```

To complete a task start with the ./todo, followed by the command complete and the name of the task.

## List tasks

```ruby
./todo display_all
```
To display a list of all tasks start with the ./todo followed by the display_all command.
