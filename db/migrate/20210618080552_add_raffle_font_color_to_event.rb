class AddRaffleFontColorToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :random_name_winner_background_color, :string, default: "#FFFFFF"
    add_column :events, :random_number_winner_background_color, :string, default: "#FFFFFF"
    add_column :events, :spin_a_wheel_winner_background_color, :string, default: "#FFFFFF"
    add_column :events, :random_name_winner_font_color, :string, default: "#000000"
    add_column :events, :random_number_winner_font_color, :string, default: "#000000"
    add_column :events, :spin_a_wheel_winner_font_color, :string, default: "#000000"
    add_column :events, :random_name_font_color, :string, default: "#FFFFFF"
    add_column :events, :random_number_font_color, :string, default: "#FFFFFF"
    add_column :events, :spin_a_wheel_font_color, :string, default: "#FFFFFF"
  end
end
