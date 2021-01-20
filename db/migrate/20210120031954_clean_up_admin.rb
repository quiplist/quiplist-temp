class CleanUpAdmin < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :member_type, :string
    remove_column :admins, :member_id, :integer
    remove_column :admins, :reset_password_token, :string
    remove_column :admins, :reset_password_sent_at, :datetime
    remove_column :admins, :remember_created_at, :datetime
  end
end
