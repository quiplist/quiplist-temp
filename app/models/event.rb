# == Schema Information
#
# Table name: events
#
#  id                       :bigint           not null, primary key
#  brochure                 :string
#  description              :string
#  end_date                 :date
#  end_time                 :datetime
#  event_code               :string
#  event_type               :integer          default(0)
#  main_background          :string
#  main_background_color    :string           default("#fefefe")
#  main_mouse_out           :string           default("#0A48AC")
#  main_mouse_over          :string           default("#007bff")
#  session_background       :string
#  session_background_color :string           default("#3F48CC")
#  session_mouse_out        :string           default("#6C63FF")
#  session_mouse_over       :string           default("#861CCE")
#  start_date               :date
#  start_time               :datetime
#  status                   :integer          default(0)
#  stream_key               :string
#  stream_type              :integer
#  stream_video             :string
#  title                    :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#
class Event < ApplicationRecord
  has_many :guest_lists, dependent: :destroy
  has_many :users, through: :guest_lists
  has_many :questionnaires
  has_many :raffles
  has_many :chats
  has_many :admin_events, dependent: :destroy
  has_many :admins, through: :admin_events

  mount_uploader :brochure, BrochureUploader
  mount_uploader :stream_video, StreamVideoUploader
  mount_uploader :session_background, AssetUploader
  mount_uploader :main_background, AssetUploader

  PRIVATE = 0
  PUBLIC = 1

  EVENT_TYPES = {
    PRIVATE => "Private",
    PUBLIC => "Public"
  }

  NONE = 0
  UPLOAD = 1
  FB_VIDEO = 2
  YOUTUBE_VIDEO = 3

  STREAM_TYPES = {
    NONE => "None",
    UPLOAD => "Upload",
    FB_VIDEO => "Facebook Live/Video",
    YOUTUBE_VIDEO => "Youtube Live/Video"
  }

  LIVE_STREAMS = [FB_VIDEO, YOUTUBE_VIDEO]

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

  def fb_video?
    stream_type == FB_VIDEO
  end

  def youtube_video?
    stream_type == YOUTUBE_VIDEO
  end

  def lived_stream?
    LIVE_STREAMS.include? stream_type
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
