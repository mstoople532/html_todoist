class AddWinningCandidateIdToCampaignMigration < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :origin_language_id
      t.string :origin_phrase
      t.string :foreign_language_id
      t.string :foreign_phrase
    end
  end
end
