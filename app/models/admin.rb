# == Schema Information
#
# Table name: admins
#
#  id                 :bigint           not null, primary key
#  affiliation        :string
#  birthdate          :date
#  contact_number     :string
#  email              :string           default(""), not null
#  encrypted_password :string           default(""), not null
#  full_name          :string
#  role               :integer          default(2)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_admins_on_email  (email) UNIQUE
#
class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatables

  has_many :approved, foreign_key: "approver_id", class_name: "GuestList"
  has_many :reactions, as: :responder
  has_many :chats, as: :sender

  SUPER_ADMIN = 0
  ADMIN = 1

  ROLE_TYPES = {
    SUPER_ADMIN => "Super Admin",
    ADMIN => "Admin"
  }


  validates :email, presence: true, uniqueness: true
  validates :full_name, presence: true
  validates :birthdate, presence: true

  scope :super_admin, -> { where(role: SUPER_ADMIN) }
  scope :admin, -> { where(role: ADMIN) }
  scope :sorted, -> { order(created_at: :asc) }
  scope :search, lambda {|query|
    where("email ILIKE ? OR
          full_name ILIKE ?", "%#{query}%", "%#{query}%")
  }

  def role_name
    ROLE_TYPES[role]
  end

  def super_admin?
    role == SUPER_ADMIN
  end

  def admin?
    role == ADMIN
  end
end
