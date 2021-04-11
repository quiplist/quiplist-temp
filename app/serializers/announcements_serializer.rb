class AnnouncementSerializer < ActiveModel::Serializer
  attributes :id, :message, :admin_id, :admin_name, :event_id, :created_at

  belongs_to :event

  def admin_name
    object.admin&.full_name
  end
end
