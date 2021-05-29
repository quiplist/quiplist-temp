# == Schema Information
#
# Table name: guest_lists
#
#  id            :bigint           not null, primary key
#  raffle_number :integer
#  raffle_status :integer          default(0)
#  status        :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  approver_id   :bigint
#  event_id      :bigint
#  user_id       :bigint
#
# Indexes
#
#  index_guest_lists_on_approver_id  (approver_id)
#  index_guest_lists_on_event_id     (event_id)
#  index_guest_lists_on_user_id      (user_id)
#
require 'csv'
class GuestList < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
  belongs_to :approver, class_name: 'Admin', foreign_key: 'approver_id', optional: true
  belongs_to :event
  has_many :raffles
  has_many :game_scores

  PENDING = 0
  APPROVED = 1
  DENIED = 2

  STATUSES = {
    PENDING => "Pending",
    APPROVED => "Approved",
    DENIED => "Denied"
  }

  ELIGIBLE = 0
  NOT_ELIGIBLE = 1
  WON = 2

  RAFFLE_STATUSES = {
    ELIGIBLE => "Eligible for raffle",
    NOT_ELIGIBLE => "Not Eligible for raffle",
    WON => "Already won"
  }

  scope :pending, -> { where(status: PENDING) }
  scope :approved, -> { where(status: APPROVED) }
  scope :denied, -> { where(status: DENIED) }
  scope :eligible, -> { where(raffle_status: ELIGIBLE) }
  scope :not_eligible, -> { where(raffle_status: NOT_ELIGIBLE) }
  scope :won, -> { where(raffle_status: WON) }
  scope :sorted, -> { order(created_at: :asc) }
  scope :invitation, -> (user, event) { find_by(user: user, event: event) }

  def status_name
    STATUSES[status]
  end

  def raffle_status_name
    RAFFLE_STATUSES[raffle_status]
  end

  def pending?
    status == PENDING
  end

  def eligible?
    raffle_status == ELIGIBLE
  end

  def not_eligible?
    raffle_status == NOT_ELIGIBLE
  end

  def won?
    raffle_status == WON
  end

  def approved?
    status == APPROVED
  end

  def denied?
    status == DENIED
  end

  def self.create_guest_list(user, event)
    if user.client? && !event.guest_lists.exists?(user: user)
      raffle_number = generate_raffle_number(event)
      status = event.public? ? APPROVED : PENDING
      GuestList.create(user: user, event: event, raffle_number: raffle_number, status: status)
    end
  end

  def self.generate_raffle_number(event)
    temp_raffle_number = 0
    loop do
      temp_raffle_number = rand(9999)
      break temp_raffle_number unless GuestList.where(raffle_number: temp_raffle_number, event: event).exists?
    end
    temp_raffle_number
  end

  def self.winner(guest_lists)
    ids = guest_lists.ids
    winner = ids.sample
    winner
  end

  def self.to_csv(event)
    #attributes = %w{id full_name email contact_number affiliation member_name member_id}
    attributes = ["full_name", "email"]
    if event.include_company
      attributes << "company"
    end
    if event.include_affiliation
      attributes << "affiliation"
    end
    if event.include_member_company
      attributes << "member_company"
    end
    if event.include_member_type
      attributes << "member_name"
    end
    if event.include_abo_type
      attributes << "abo_type_name"
    end
    if event.include_distributor_type
      attributes << "distributor_type_name"
    end
    if event.include_member_id
      attributes << "member_id"
    end
    if event.include_employee_number
      attributes << "employee_number"
    end
    if event.include_id_number
      attributes << "id_number"
    end
    if event.include_abo_number
      attributes << "abo_number"
    end
    if event.include_aes_number
      attributes << "aes_number"
    end
    if event.include_distributor_number
      attributes << "distributor_number"
    end
    if event.include_mailing_address
      attributes << "mailing_address"
    end
    if event.include_contact_number
      attributes << "contact_number"
    end
    if event.include_who_invited_you
      attributes << "who_invited_you?"
    end
    if event.include_upline
      attributes << "upline"
    end

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |guest_list|
        csv << attributes.map{ |attr| guest_list.user.send(attr) }
      end
    end
  end

end
