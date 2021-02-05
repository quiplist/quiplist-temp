# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  affiliation            :string
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
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :guest_lists
  has_many :events, through: :guest_lists
  has_many :reactions, as: :responder
  has_many :chats, as: :sender

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
  validates :contact_number, presence: true
  validates :member_type, presence: true
  validates :member_id, presence: { message: "Id can't be blank" }, if: :member?
  validates :affiliation, presence: true

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

  def member?
    member_type == MEMBER
  end

  def non_member?
    member_type == NON_MEMBER
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

  def self.generate_new
    full_xname     = Faker::Name.name
    password = "password"
    email      = Faker::Internet.email
    User.create!(full_name:     full_xname,
                 password: password,
                 email:    email)
  end

end
