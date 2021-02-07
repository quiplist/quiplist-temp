# == Schema Information
#
# Table name: reactions
#
#  id             :bigint           not null, primary key
#  emotion        :integer          default(0)
#  responder_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  event_id       :bigint
#  responder_id   :bigint
#
# Indexes
#
#  index_reactions_on_event_id                                      (event_id)
#  index_reactions_on_event_id_and_responder_id_and_responder_type  (event_id,responder_id,responder_type) UNIQUE
#  index_reactions_on_responder_type_and_responder_id               (responder_type,responder_id)
#
require 'test_helper'

class ReactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
