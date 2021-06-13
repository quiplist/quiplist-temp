class AddOnExpoToAnnoucements < ActiveRecord::Migration[6.0]
  def change
    add_column :announcements, :on_expo, :boolean, default: false
  end
end
