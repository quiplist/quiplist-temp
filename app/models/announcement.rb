# == Schema Information
#
# Table name: announcements
#
#  id         :bigint           not null, primary key
#  message    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  admin_id   :bigint
#  event_id   :bigint
#
# Indexes
#
#  index_announcements_on_admin_id  (admin_id)
#  index_announcements_on_event_id  (event_id)
#
class Announcement < ApplicationRecord
  belongs_to :event
  belongs_to :admin

  default_scope { order(created_at: :asc) }

  validates :message, presence: true
end