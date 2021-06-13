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
class FeedBack < ApplicationRecord

  belongs_to :event
  has_many :ratings, dependent: :destroy
  has_many :users, through: :ratings

  RATING = 0
  OPEN_ENDED = 1

  QUESTION_TYPES = {
    RATING => "Rating",
    OPEN_ENDED => "Open ended question"
  }


  validates :question, presence: true


  scope :sorted, -> { order(created_at: :asc) }

  def question_type_name
    QUESTION_TYPES[question_type]
  end


end
