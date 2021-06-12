class ChangeScoreToInt < ActiveRecord::Migration[6.0]
  def change
    change_column :game_scores, :score, 'integer USING CAST(score AS integer)'
  end
end
