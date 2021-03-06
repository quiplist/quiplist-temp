# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  abo_number             :string
#  abo_type               :integer          default(0)
#  aes_number             :string
#  affiliation            :string
#  company                :string
#  contact_number         :string
#  distributor_number     :string
#  distributor_type       :integer          default(0)
#  email                  :string           default(""), not null
#  employee_number        :string
#  encrypted_password     :string           default(""), not null
#  full_name              :string
#  id_number              :string
#  mailing_address        :string
#  member_company         :string
#  member_type            :integer          default(0)
#  profile_image          :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default(2)
#  upline                 :string
#  who_invited_you?       :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  member_id              :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :role, :role_name, :user_type

  # has_many :guest_lists
  # has_many :events, through: :guest_lists

  def role_name
    object.role_name
  end

  def user_type
    object.client? ? "User" : "Admin"
  end
end
