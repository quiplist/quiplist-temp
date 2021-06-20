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
class FeedBackSerializer < ActiveModel::Serializer
  attributes :id, :question, :question_type, :event_id, :question_type_name, :rating_choices

  def rating_choices
    Rating::RATINGS
  end
end
