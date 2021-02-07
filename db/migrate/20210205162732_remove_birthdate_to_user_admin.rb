class RemoveBirthdateToUserAdmin < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :birthdate, :date
    remove_column :admins, :birthdate, :date
  end
end
