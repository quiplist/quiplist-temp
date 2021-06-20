# == Schema Information
#
# Table name: announcements
#
#  id                  :bigint           not null, primary key
#  display_annoucement :boolean          default(TRUE)
#  message             :string
#  on_expo             :boolean          default(FALSE)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  admin_id            :bigint
#  event_id            :bigint
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
  scope :main_program, -> { where(on_expo: false) }
  scope :on_expo, -> { where(on_expo: true) }

  validates :message, presence: true
end
