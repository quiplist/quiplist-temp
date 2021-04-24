class RefactorAdminFields < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :affiliation, :string
    remove_column :admins, :member_type, :integer
    remove_column :admins, :member_id, :string

    add_column :admins, :company, :string
    add_column :admins, :position, :string
  end
end
