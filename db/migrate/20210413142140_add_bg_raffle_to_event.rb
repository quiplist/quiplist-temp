class AddBgRaffleToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :spin_a_wheel_background, :string
    add_column :events, :spin_a_wheel_background_color, :string, default: "#3F48CC"
    add_column :events, :spin_a_wheel_draw_mouse_over, :string, default: "#861CCE"
    add_column :events, :spin_a_wheel_draw_mouse_out, :string, default: "#6C63FF"
    add_column :events, :spin_a_wheel_winner_mouse_over, :string, default: "#861CCE"
    add_column :events, :spin_a_wheel_winner_mouse_out, :string, default: "#6C63FF"
    add_column :events, :random_name_background, :string
    add_column :events, :random_name_background_color, :string, default: "#3F48CC"
    add_column :events, :random_name_draw_mouse_over, :string, default: "#861CCE"
    add_column :events, :random_name_draw_mouse_out, :string, default: "#6C63FF"
    add_column :events, :random_name_winner_mouse_over, :string, default: "#861CCE"
    add_column :events, :random_name_winner_mouse_out, :string, default: "#6C63FF"
    add_column :events, :random_number_background, :string
    add_column :events, :random_number_background_color, :string, default: "#3F48CC"
    add_column :events, :random_number_draw_mouse_over, :string, default: "#861CCE"
    add_column :events, :random_number_draw_mouse_out, :string, default: "#6C63FF"
    add_column :events, :random_number_winner_mouse_over, :string, default: "#861CCE"
    add_column :events, :random_number_winner_mouse_out, :string, default: "#6C63FF"
  end
end
