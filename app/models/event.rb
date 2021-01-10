# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  brochure     :string
#  description  :string
#  end_date     :date
#  end_time     :datetime
#  event_code   :string
#  event_type   :integer          default(0)
#  start_date   :date
#  start_time   :datetime
#  status       :integer          default(0)
#  stream_key   :string
#  stream_type  :integer
#  stream_video :string
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Event < ApplicationRecord
  has_many :guest_lists
  has_many :users, through: :guest_lists
  #has_many :questionnaires
  #has_many :raffles

  mount_uploader :brochure, BrochureUploader
  mount_uploader :stream_video, StreamVideoUploader

  PRIVATE = 0
  PUBLIC = 1

  EVENT_TYPES = {
    PRIVATE => "Private",
    PUBLIC => "Public"
  }

  STREAM_KEY = 0
  UPLOAD = 1

  STREAM_TYPES = {
    STREAM_KEY => "Stream Key",
    UPLOAD => "Upload"
  }

  QUEUED = 0
  ONGOING = 1
  DONE = 2

  STATUSES = {
    QUEUED => "Queued",
    ONGOING => "On Going",
    DONE => "Done"
  }

  validates :event_code, presence: true, uniqueness: true
  validates :title, presence: true

  scope :queued, -> { where(status: QUEUED) }
  scope :ongoing, -> { where(status: ONGOING) }
  scope :done, -> { where(status: DONE) }
  scope :sorted, -> { order(created_at: :asc) }
  scope :search, lambda {|query|
    where("event_code ILIKE ? OR
          title ILIKE ?", "%#{query}%", "%#{query}%")
  }

  def queued?
    status == QUEUED
  end

  def ongoing?
    status == ONGOING
  end

  def done?
    status == DONE
  end

  def public?
    event_type == PUBLIC
  end

  def private?
    event_type == PRIVATE
  end

  def uploaded_stream?
    stream_type == UPLOAD
  end

  def lived_stream?
    stream_type == STREAM_KEY
  end

  def status_name
    STATUSES[status]
  end

  def stream_type_name
    STREAM_TYPES[stream_type]
  end

  def event_type_name
    EVENT_TYPES[stream_type]
  end
end
