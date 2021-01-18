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
  belongs_to :approver, class_name: 'User', foreign_key: 'approver_id', optional: true
  belongs_to :event
  #has_many :answers
  #has_many :raffles

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

  def self.to_csv
    attributes = %w{id full_name email contact_number}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |guest_list|
        csv << attributes.map{ |attr| guest_list.user.send(attr) }
      end
    end
  end

end
