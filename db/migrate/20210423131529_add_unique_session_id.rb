class AddUniqueSessionId < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :unique_session_id, :string
    add_column :users, :unique_session_id, :string

    add_index :users, :unique_session_id, unique: true
    add_index :admins, :unique_session_id, unique: true
  end
end
