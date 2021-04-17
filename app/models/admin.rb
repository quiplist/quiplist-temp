# == Schema Information
#
# Table name: admins
#
#  id                 :bigint           not null, primary key
#  company            :string
#  contact_number     :string
#  email              :string           default(""), not null
#  encrypted_password :string           default(""), not null
#  full_name          :string
#  position           :string
#  profile_image      :string
#  reset_password     :boolean          default(FALSE)
#  role               :integer          default(2)
#  temporary_password :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_admins_on_email  (email) UNIQUE
#
class Admin < ApplicationRecord
  include ResetPassword
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatables, :registerable

  has_many :approved, foreign_key: "approver_id", class_name: "GuestList"
  has_many :reactions, as: :responder
  has_many :chats, as: :sender
  has_many :admin_events, dependent: :destroy
  has_many :events, through: :admin_events
  has_many :access_rights, dependent: :destroy
  has_many :announcements, dependent: :destroy

  mount_uploader :profile_image, ProfileImageUploader

  accepts_nested_attributes_for :access_rights

  SUPER_ADMIN = 0
  ADMIN = 1

  ROLE_TYPES = {
    SUPER_ADMIN => "Super Admin",
    ADMIN => "Admin"
  }

  validates :email, presence: true, uniqueness: true
  validates :full_name, presence: true

  scope :super_admin, -> { where(role: SUPER_ADMIN) }
  scope :admin, -> { where(role: ADMIN) }
  scope :sorted, -> { order(full_name: :asc) }
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

  def self.last_super_admin?
    Admin.super_admin.count == 1
  end

  # def self.available_events
  #   ids = self.events.ids
  #   return Event.where.not(id: ids)
  # end
end
