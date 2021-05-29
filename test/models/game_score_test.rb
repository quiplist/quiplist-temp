# == Schema Information
#
# Table name: game_scores
#
#  id            :bigint           not null, primary key
#  score         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  event_id      :bigint
#  game_id       :string
#  guest_list_id :bigint
#
# Indexes
#
#  index_game_scores_on_event_id       (event_id)
#  index_game_scores_on_guest_list_id  (guest_list_id)
#
require 'test_helper'

class GameScoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
