# == Schema Information
#
# Table name: answers
#
#  id               :bigint           not null, primary key
#  answer           :string
#  pinned           :boolean          default(FALSE)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  questionnaire_id :bigint
#  user_id          :bigint
#
# Indexes
#
#  index_answers_on_questionnaire_id  (questionnaire_id)
#  index_answers_on_user_id           (user_id)
#
class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :questionnaire_id, :user_id, :user

  def user
    object.user
  end

end
