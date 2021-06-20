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
class AnnouncementSerializer < ActiveModel::Serializer
  attributes :id, :message, :admin_id, :admin_name, :event_id, :created_at, :display_annoucement, :on_expo

  belongs_to :event

  def admin_name
    object.admin&.full_name
  end
end
