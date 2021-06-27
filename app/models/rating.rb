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
class Rating < ApplicationRecord

  belongs_to :guest_list
  belongs_to :feed_back

  POOR = 0
  FAIR = 1
  GOOD = 2
  VERY_GOOD = 3
  EXCELLENT = 4

  RATINGS = {
    POOR => "Poor",
    FAIR => "Fair",
    GOOD => "Good",
    VERY_GOOD => "Very Good",
    EXCELLENT => "Excellent"
  }

  scope :poor, -> { where(answer: POOR) }
  scope :fair, -> { where(answer: FAIR) }
  scope :good, -> { where(answer: GOOD) }
  scope :very_good, -> { where(answer: VERY_GOOD) }
  scope :excellent, -> { where(answer: EXCELLENT) }

  def rating_name
    (self.feed_back.question_type == FeedBack::RATING) ? RATINGS[answer.to_i] : answer
  end
end
