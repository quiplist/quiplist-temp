class AddResetPasswordToUsersAdmins < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :reset_password, :boolean, default: false
    add_column :users, :temporary_password, :string

    add_column :admins, :reset_password, :boolean, default: false
    add_column :admins, :temporary_password, :string
  end
end
