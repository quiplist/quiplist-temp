class ChangeDefaultValueUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :abo_type, :integer
    remove_column :users, :distributor_type, :integer

    add_column :users, :abo_type, :integer, default: 4
    add_column :users, :distributor_type, :integer, default: 7
  end
end
