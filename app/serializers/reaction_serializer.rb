class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :responder_id, :responder_type, :event_id, :emotion, :emotion_name

  def emotion_name
    object.emotion_name
  end
end
