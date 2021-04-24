# == Schema Information
#
# Table name: chats
#
#  id          :bigint           not null, primary key
#  chat_type   :integer          default(0)
#  message     :string
#  sender_type :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  event_id    :bigint
#  sender_id   :bigint
#
# Indexes
#
#  index_chats_on_event_id                   (event_id)
#  index_chats_on_sender_type_and_sender_id  (sender_type,sender_id)
#
class ChatSerializer < ActiveModel::Serializer
  attributes :id, :message, :sender_id, :sender_type, :event_id, :created_at, :sender_name, :chat_type

  belongs_to :event

  def sender_name
    object.sender&.full_name
  end
end
