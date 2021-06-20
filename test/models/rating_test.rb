# == Schema Information
#
# Table name: ratings
#
#  id            :bigint           not null, primary key
#  answer        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  feed_back_id  :bigint
#  guest_list_id :bigint
#
# Indexes
#
#  index_ratings_on_feed_back_id   (feed_back_id)
#  index_ratings_on_guest_list_id  (guest_list_id)
#
require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
