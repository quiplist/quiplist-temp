class AddCustomizationToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :session_background, :string
    add_column :events, :session_background_color, :string, default: "#3F48CC"
    add_column :events, :session_mouse_over, :string, default: "#861CCE"
    add_column :events, :session_mouse_out, :string, default: "#6C63FF"
    add_column :events, :main_background, :string
    add_column :events, :main_background_color, :string, default: "#fefefe"
    add_column :events, :main_mouse_over, :string, default: "#007bff"
    add_column :events, :main_mouse_out, :string, default: "#0A48AC"
  end
end
