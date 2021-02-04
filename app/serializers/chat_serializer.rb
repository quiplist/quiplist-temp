class ChatSerializer < ActiveModel::Serializer
  attributes :id, :message, :sender_id, :sender_type, :event_id, :created_at, :sender_name

  belongs_to :event

  def sender_name
    object.sender&.full_name
  end
end
