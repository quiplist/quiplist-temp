# == Schema Information
#
# Table name: game_scores
#
#  id            :bigint           not null, primary key
#  score         :integer
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
class GameScore < ApplicationRecord
  belongs_to :guest_list
  belongs_to :event

  validates :score, presence: true
  validates :game_id, presence: true

  scope :sorted, -> { order(score: :desc) }
  scope :topped, -> (top) { limit(top) }
end
