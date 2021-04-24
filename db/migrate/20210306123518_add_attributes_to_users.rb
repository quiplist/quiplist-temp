class AddAttributesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :company, :string
    add_column :users, :member_company, :string
    add_column :users, :mailing_address, :string
    add_column :users, :who_invited_you?, :string
    add_column :users, :upline, :string
    add_column :users, :abo_number, :string
    add_column :users, :aes_number, :string
    add_column :users, :distributor_number, :string
    add_column :users, :id_number, :string
    add_column :users, :employee_number, :string
    add_column :users, :profile_image, :string
    add_column :users, :abo_type, :integer, default: 0
    add_column :users, :distributor_type, :integer, default: 0

    add_column :admins, :profile_image, :string

    add_column :events, :include_affiliation, :boolean, default: true
    add_column :events, :include_company, :boolean, default: true
    add_column :events, :include_member_company, :boolean, default: true
    add_column :events, :include_mailing_address, :boolean, default: true
    add_column :events, :include_contact_number, :boolean, default: true
    add_column :events, :include_who_invited_you, :boolean, default: true
    add_column :events, :include_upline, :boolean, default: true
    add_column :events, :include_abo_number, :boolean, default: true
    add_column :events, :include_aes_number, :boolean, default: true
    add_column :events, :include_distributor_number, :boolean, default: true
    add_column :events, :include_id_number, :boolean, default: true
    add_column :events, :include_employee_number, :boolean, default: true
    add_column :events, :include_member_type, :boolean, default: true
    add_column :events, :include_member_id, :boolean, default: true
    add_column :events, :include_abo_type, :boolean, default: true
    add_column :events, :include_distributor_type, :boolean, default: true

    add_column :events, :required_affiliation, :boolean, default: false
    add_column :events, :required_company, :boolean, default: false
    add_column :events, :required_member_company, :boolean, default: false
    add_column :events, :required_mailing_address, :boolean, default: false
    add_column :events, :required_contact_number, :boolean, default: false
    add_column :events, :required_who_invited_you, :boolean, default: false
    add_column :events, :required_upline, :boolean, default: false
    add_column :events, :required_abo_number, :boolean, default: false
    add_column :events, :required_aes_number, :boolean, default: false
    add_column :events, :required_distributor_number, :boolean, default: false
    add_column :events, :required_id_number, :boolean, default: false
    add_column :events, :required_employee_number, :boolean, default: false
    add_column :events, :required_member_type, :boolean, default: false
    add_column :events, :required_member_id, :boolean, default: false
    add_column :events, :required_abo_type, :boolean, default: true
    add_column :events, :required_distributor_type, :boolean, default: true

    add_column :events, :with_guest_member_type, :boolean, default: true
    add_column :events, :with_guest_abo_type, :boolean, default: true
    add_column :events, :with_guest_distributor_type, :boolean, default: true
  end
end
