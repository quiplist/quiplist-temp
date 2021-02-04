# == Schema Information
#
# Table name: chats
#
#  id          :bigint           not null, primary key
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
require 'test_helper'

class ChatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
