# == Schema Information
#
# Table name: raffles
#
#  id            :bigint           not null, primary key
#  prize         :string
#  raffle_type   :integer          default(0)
#  status        :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  event_id      :bigint
#  guest_list_id :bigint
#
# Indexes
#
#  index_raffles_on_event_id       (event_id)
#  index_raffles_on_guest_list_id  (guest_list_id)
#
require 'test_helper'

class RaffleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
