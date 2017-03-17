require "active_record"

class CreateTasksTable < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :priority
      t.datetime :completed_at
      t.integer :list_id
      t.datetime :created_at
    end
  end
end
