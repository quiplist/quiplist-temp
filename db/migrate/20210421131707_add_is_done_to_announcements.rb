class AddIsDoneToAnnouncements < ActiveRecord::Migration[6.0]
  def change
    add_column :announcements, :display_annoucement, :boolean, default: true
  end
end
