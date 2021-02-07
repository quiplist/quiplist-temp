class CreateAccessRights < ActiveRecord::Migration[6.0]
  def change
    create_table :access_rights do |t|
      t.belongs_to :admin
      t.integer :name
      t.integer :privilege, default: 0
      t.timestamps
    end
  end
end
