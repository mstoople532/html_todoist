require "active_record"

class CreateListsTableMigration < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :name
    end
  end
end
