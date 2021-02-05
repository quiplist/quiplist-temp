class AddAttrToAdmins < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :member_type, :integer, default: 0
    add_column :admins, :member_id, :string
  end
end
