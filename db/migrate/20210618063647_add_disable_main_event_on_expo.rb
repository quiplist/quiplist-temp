class AddDisableMainEventOnExpo < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :disable_main_event, :boolean, default: false
  end
end
