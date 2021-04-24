class CreateAnnouncements < ActiveRecord::Migration[6.0]
  def change
    create_table :announcements do |t|
      t.belongs_to :event, index: true
      t.belongs_to :admin, index: true
      t.string :message
      t.timestamps
    end
  end
end
