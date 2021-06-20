class AddExpoToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :has_expo, :boolean, default: false
    add_column :events, :has_background_music, :boolean, default: false
    add_column :events, :disable_expo_games, :boolean, default: false
    add_column :events, :background_music, :string
  end
end
