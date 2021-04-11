# == Schema Information
#
# Table name: events
#
#  id                          :bigint           not null, primary key
#  brochure                    :string
#  description                 :string
#  end_date                    :date
#  end_time                    :datetime
#  event_code                  :string
#  event_type                  :integer          default(0)
#  include_abo_number          :boolean          default(TRUE)
#  include_abo_type            :boolean          default(TRUE)
#  include_aes_number          :boolean          default(TRUE)
#  include_affiliation         :boolean          default(TRUE)
#  include_company             :boolean          default(TRUE)
#  include_contact_number      :boolean          default(TRUE)
#  include_distributor_number  :boolean          default(TRUE)
#  include_distributor_type    :boolean          default(TRUE)
#  include_employee_number     :boolean          default(TRUE)
#  include_id_number           :boolean          default(TRUE)
#  include_mailing_address     :boolean          default(TRUE)
#  include_member_company      :boolean          default(TRUE)
#  include_member_type         :boolean          default(TRUE)
#  include_upline              :boolean          default(TRUE)
#  include_who_invited_you     :boolean          default(TRUE)
#  main_background             :string
#  main_background_color       :string           default("#fefefe")
#  main_mouse_out              :string           default("#0A48AC")
#  main_mouse_over             :string           default("#007bff")
#  required_abo_number         :boolean          default(FALSE)
#  required_abo_type           :boolean          default(TRUE)
#  required_aes_number         :boolean          default(FALSE)
#  required_affiliation        :boolean          default(FALSE)
#  required_company            :boolean          default(FALSE)
#  required_contact_number     :boolean          default(FALSE)
#  required_distributor_number :boolean          default(FALSE)
#  required_distributor_type   :boolean          default(TRUE)
#  required_employee_number    :boolean          default(FALSE)
#  required_id_number          :boolean          default(FALSE)
#  required_mailing_address    :boolean          default(FALSE)
#  required_member_company     :boolean          default(FALSE)
#  required_member_type        :boolean          default(FALSE)
#  required_upline             :boolean          default(FALSE)
#  required_who_invited_you    :boolean          default(FALSE)
#  session_background          :string
#  session_background_color    :string           default("#3F48CC")
#  session_mouse_out           :string           default("#6C63FF")
#  session_mouse_over          :string           default("#861CCE")
#  start_date                  :date
#  start_time                  :datetime
#  status                      :integer          default(0)
#  stream_key                  :string
#  stream_type                 :integer
#  stream_video                :string
#  title                       :string
#  with_guest_abo_type         :boolean          default(TRUE)
#  with_guest_distributor_type :boolean          default(TRUE)
#  with_guest_member_type      :boolean          default(TRUE)
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  include_member_id           :boolean          default(TRUE)
#  required_member_id          :boolean          default(FALSE)
#
class Event < ApplicationRecord
  has_many :guest_lists, dependent: :destroy
  has_many :users, through: :guest_lists
  has_many :questionnaires
  has_many :raffles
  has_many :chats, dependent: :destroy
  has_many :admin_events, dependent: :destroy
  has_many :admins, through: :admin_events
  has_many :announcements, dependent: :destroy

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

  def no_video?
    stream_type == NONE
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
    EVENT_TYPES[event_type]
  end

  def has_brochure?
    !brochure.file.nil?
  end
end
