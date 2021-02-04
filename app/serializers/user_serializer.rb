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
