class CreateGameScores < ActiveRecord::Migration[6.0]
  def change
    create_table :game_scores do |t|
      t.belongs_to :guest_list, index: true
      t.belongs_to :event, index: true
      t.string :game_id
      t.string :score
      t.timestamps
    end
  end
end
