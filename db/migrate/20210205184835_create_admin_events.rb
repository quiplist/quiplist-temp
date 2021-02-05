class CreateAdminEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :admin_events do |t|
      t.belongs_to :event
      t.belongs_to :admin
      t.timestamps
    end
  end
end
