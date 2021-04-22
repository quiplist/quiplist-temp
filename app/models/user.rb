# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  abo_number             :string
#  abo_type               :integer          default(4)
#  aes_number             :string
#  affiliation            :string
#  company                :string
#  contact_number         :string
#  distributor_number     :string
#  distributor_type       :integer          default(7)
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
#  reset_password         :boolean          default(FALSE)
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default(2)
#  temporary_password     :string
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
class User < ApplicationRecord
  include ResetPassword
  # Include default devise modules. Others available are:
  # :recoverable, :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :validatable

  has_many :guest_lists, dependent: :destroy
  has_many :events, through: :guest_lists
  has_many :reactions, as: :responder
  has_many :chats, as: :sender
  has_many :answers

  mount_uploader :profile_image, ProfileImageUploader

  attr_accessor :event_code

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
  CORPORATE = 2
  ABO = 3
  NON_ABO = 4
  AES = 5
  DISTRIBUTOR = 6
  NON_DISTRIBUTOR = 7
  GUEST = 8

  MEMBER_TYPES = {
    NON_MEMBER => "Non Member",
    MEMBER => "Member",
    CORPORATE => "Corporate"
  }

  MEMBER_TYPES_WITH_GUEST = {
    NON_MEMBER => "Non Member",
    MEMBER => "Member",
    CORPORATE => "Corporate",
    GUEST => "Guest"
  }

  ABO_TYPES = {
    NON_ABO => "Non ABO",
    ABO => "ABO",
    AES => "AES",
    CORPORATE => "Corporate"
  }

  ABO_TYPES_WITH_GUEST = {
    NON_ABO => "Non ABO",
    ABO => "ABO",
    AES => "AES",
    CORPORATE => "Corporate",
    GUEST => "Guest"
  }

  DISTRIBUTOR_TYPES = {
    NON_DISTRIBUTOR => "Non Distributor",
    DISTRIBUTOR => "Distributor",
    CORPORATE => "Corporate"
  }

  DISTRIBUTOR_TYPES_WTIH_GUEST = {
    NON_DISTRIBUTOR => "Non Distributor",
    DISTRIBUTOR => "Distributor",
    CORPORATE => "Corporate",
    GUEST => "Guest"
  }

  validates :email, presence: true, uniqueness: true
  validates :full_name, presence: true

  validates :contact_number, presence: true, if: :required_contact_number?
  validates :member_type, presence: true, if: :required_member_type?
  validates :abo_type, presence: true, if: :required_abo_type?
  validates :distributor_type, presence: true, if: :required_distributor_type?
  validates :member_id, presence: true, if: :required_member_id?
  validates :affiliation, presence: true, if: :required_affiliation?
  validates :abo_number, presence: true, if: :required_abo_number?
  validates :aes_number, presence: true, if: :required_aes_number?
  validates :company, presence: true, if: :required_company?
  validates :id_number, presence: true, if: :required_id_number?
  validates :distributor_number, presence: true, if: :required_distributor_number?
  validates :employee_number, presence: true, if: :required_employee_number?
  validates :mailing_address, presence: true, if: :required_mailing_address?
  validates :member_company, presence: true, if: :required_member_company?
  validates :upline, presence: true, if: :required_upline?
  validates :who_invited_you?, presence: true, if: :required_who_invited_you?



  scope :super_admin, -> { where(role: SUPER_ADMIN) }
  scope :admin, -> { where(role: ADMIN) }
  scope :client, -> { where(role: CLIENT) }
  scope :non_member, -> { where(member_type: NON_MEMBER) }
  scope :member, -> { where(member_type: MEMBER) }
  scope :sorted, -> { order(full_name: :asc) }
  scope :search, lambda {|query|
    where("email ILIKE ? OR
          full_name ILIKE ?", "%#{query}%", "%#{query}%")
  }
  scope :admin_users, -> (event_ids) { joins(:guest_lists).where("guest_lists.event_id IN (?)", event_ids).distinct }

  def set_default_role
    self.role ||= :client
  end

  def role_name
    ROLE_TYPES[role]
  end

  def member_name
    MEMBER_TYPES_WITH_GUEST[member_type]
  end

  def abo_type_name
    ABO_TYPES_WITH_GUEST[abo_type]
  end

  def distributor_type_name
    DISTRIBUTOR_TYPES_WTIH_GUEST[distributor_type]
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

  def required_abo_number?
    current_event&.required_abo_number? || false
  end

  def required_aes_number?
    current_event&.required_aes_number? || false
  end

  def required_affiliation?
    current_event&.required_affiliation? || false
  end

  def required_company?
    current_event&.required_company? || false
  end

  def required_contact_number?
    current_event&.required_contact_number? || false
  end

  def required_id_number?
    current_event&.required_id_number? || false
  end

  def required_distributor_number?
    current_event&.required_distributor_number? || false
  end

  def required_employee_number?
    current_event&.required_employee_number? || false
  end

  def required_mailing_address?
    current_event&.required_mailing_address? || false
  end

  def required_member_company?
    current_event&.required_member_company? || false
  end

  def required_member_type?
    current_event&.required_member_type? || false
  end

  def required_abo_type?
    current_event&.required_abo_type? || false
  end

  def required_distributor_type?
    current_event&.required_distributor_type? || false
  end

  def required_upline?
    current_event&.required_upline? || false
  end

  def required_who_invited_you?
    current_event&.required_who_invited_you? || false
  end

  def required_member_id?
    current_event&.required_member_id? || false
  end

  def self.generate_new
    full_xname     = Faker::Name.name
    password = "password"
    email      = Faker::Internet.email
    User.create!(full_name:     full_xname,
                 password: password,
                 email:    email)
  end

  private

  def current_event
    event = Event.find_by(event_code: self.event_code)
    event
  end

end
