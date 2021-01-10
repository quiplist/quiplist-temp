# == Schema Information
#
# Table name: guest_lists
#
#  id            :bigint           not null, primary key
#  raffle_number :integer
#  raffle_status :integer          default(0)
#  status        :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  approver_id   :bigint
#  event_id      :bigint
#  user_id       :bigint
#
# Indexes
#
#  index_guest_lists_on_approver_id  (approver_id)
#  index_guest_lists_on_event_id     (event_id)
#  index_guest_lists_on_user_id      (user_id)
#
require 'test_helper'

class GuestListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
