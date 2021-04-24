# == Schema Information
#
# Table name: raffles
#
#  id            :bigint           not null, primary key
#  prize         :string
#  raffle_type   :integer          default(0)
#  status        :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  event_id      :bigint
#  guest_list_id :bigint
#
# Indexes
#
#  index_raffles_on_event_id       (event_id)
#  index_raffles_on_guest_list_id  (guest_list_id)
#
class Raffle < ApplicationRecord
  belongs_to :event
  belongs_to :winner, class_name: 'GuestList', foreign_key: 'guest_list_id', optional: true

  default_scope { order("created_at ASC") }

  RANDOM_NAMES = 0
  SPIN_WHEEL = 1
  LOTTO = 2

  RAFFLE_TYPES = {
    RANDOM_NAMES => "Random Names",
    SPIN_WHEEL => "Spin a Wheel",
    LOTTO => "Lotto"
  }

  QUEUED = 0
  ONGOING = 1
  DONE = 2

  STATUSES = {
    QUEUED => "Queued",
    ONGOING => "On going",
    DONE => "Done"
  }

  validates :raffle_type, presence: true
  validates :prize, presence: true

  scope :queued, -> { where(status: QUEUED) }
  scope :ongoing, -> { where(status: ONGOING) }
  scope :done, -> { where(status: DONE) }
  scope :sorted, -> { order(created_at: :asc) }

  def queued?
    status == QUEUED
  end

  def ongoing?
    status == ONGOING
  end

  def done?
    status == DONE
  end

  def random_name?
    raffle_type == RANDOM_NAMES
  end

  def spin_wheel?
    raffle_type == SPIN_WHEEL
  end

  def lotto?
    raffle_type == LOTTO
  end

  def status_name
    STATUSES[status]
  end

  def raffle_type_name
    RAFFLE_TYPES[raffle_type]
  end
end
