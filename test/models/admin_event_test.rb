# == Schema Information
#
# Table name: admin_events
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  admin_id   :bigint
#  event_id   :bigint
#
# Indexes
#
#  index_admin_events_on_admin_id  (admin_id)
#  index_admin_events_on_event_id  (event_id)
#
require 'test_helper'

class AdminEventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
