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
class Chat < ApplicationRecord
  belongs_to :sender, polymorphic: true
  belongs_to :event

  DEFAULT = 0
  REACTION = 1

  CHAT_TYPES = {
    DEFAULT => "Default",
    REACTION => "Reaction"
  }

  default_scope { order(created_at: :asc).limit(100) }

  def default?
    chat_type == DEFAULT
  end

  def reaction?
    chat_type == REACTION
  end

  def chat_type_name
    CHAT_TYPES[message_type]
  end

end
