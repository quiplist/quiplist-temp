class UpdateUser < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :who_invited_you?, :who_invited_you
  end
end
