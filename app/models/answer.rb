# == Schema Information
#
# Table name: answers
#
#  id               :bigint           not null, primary key
#  answer           :string
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
class Answer < ApplicationRecord
  belongs_to :questionnaire, optional: true
  belongs_to :user
end
