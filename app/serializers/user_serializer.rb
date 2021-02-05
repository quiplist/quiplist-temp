# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  affiliation            :string
#  birthdate              :date
#  contact_number         :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  full_name              :string
#  member_type            :integer          default(0)
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default(2)
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
