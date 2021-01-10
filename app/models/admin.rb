# == Schema Information
#
# Table name: admins
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
#  index_admins_on_email                 (email) UNIQUE
#  index_admins_on_reset_password_token  (reset_password_token) UNIQUE
#
class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatables

  SUPER_ADMIN = 0
  ADMIN = 1
  CLIENT = 2

  ROLE_TYPES = {
    SUPER_ADMIN => "Super Admin",
    ADMIN => "Admin",
    CLIENT => "Client"
  }

  NON_MEMBER = 0
  MEMBER = 1

  MEMBER_TYPES = {
    NON_MEMBER => "Non Member",
    MEMBER => "Member"
  }

  validates :email, presence: true, uniqueness: true
  validates :full_name, presence: true
  validates :birthdate, presence: true

  scope :super_admin, -> { where(role: SUPER_ADMIN) }
  scope :admin, -> { where(role: ADMIN) }
  scope :client, -> { where(role: CLIENT) }
  scope :non_member, -> { where(member_type: NON_MEMBER) }
  scope :member, -> { where(member_type: MEMBER) }
  scope :sorted, -> { order(created_at: :asc) }
  scope :search, lambda {|query|
    where("email ILIKE ? OR
          full_name ILIKE ?", "%#{query}%", "%#{query}%")
  }

  def set_default_role
    self.role ||= :client
  end

  def role_name
    ROLE_TYPES[role]
  end

  def member_name
    MEMBER_TYPES[member_type]
  end

  def super_admin?
    role == SUPER_ADMIN
  end

  def admin?
    role == ADMIN
  end

  def client?
    role == CLIENT
  end
end
