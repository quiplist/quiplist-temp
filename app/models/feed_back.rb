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
require 'csv'
class FeedBack < ApplicationRecord

  belongs_to :event
  has_many :ratings, dependent: :destroy
  has_many :guest_lists, through: :ratings

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

  def to_csv(feedback)
    attributes = %w{question full_name answer}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      feedback.ratings.each do |rating|
        data = []
        data << rating.feed_back.question
        data << rating.guest_list.user.full_name
        data << rating.rating_name
        csv << data
      end
    end
  end


end
