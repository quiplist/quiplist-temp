# == Schema Information
#
# Table name: feed_backs
#
#  id            :bigint           not null, primary key
#  question      :string
#  question_type :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  event_id      :bigint
#
# Indexes
#
#  index_feed_backs_on_event_id  (event_id)
#
require 'test_helper'

class FeedBackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
