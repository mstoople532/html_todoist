# Todo List with API -Server

This program allows you to create tasks and lists to organize what you need to do.

## Get Tasks
```ruby
get "/tasks"
```
Use this feature to print out all of the tasks.

## Make new Tasks
```ruby
post "/tasks"
```
This feature will use information provided by the client to make a new task.

## Search Tasks
```ruby
get "/tasks/:id"
```
This feature will take an id from the client and return the requested task.

## Edit Task
```ruby
patch "/tasks/:id"
```
This feature will take input from a user and update the requested task with new information.

## Get Lists
```ruby
get "/lists"
```
This feature will print out all of the tasks.

## Edit Lists
```ruby
get "/lists/:list_id/:task_id"
```
This feature will take a requested task and associate it with a requested list by adding the list id to the clients schema.
