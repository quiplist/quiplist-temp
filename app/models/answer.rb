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

  default_scope { order("created_at ASC") }

  scope :correctly_answered, ->(answer, questionnaire) { where(answer: answer, questionnaire: questionnaire) }
  scope :sorted, -> { order(created_at: :asc) }


  def self.get_rating(questionnaire)
    ratings = []
    total_answers = questionnaire.answered_correctly.count
    return ratings if total_answers.zero?
    questionnaire.choices.each do |choice|
      total_choice = Answer.correctly_answered(choice.name, questionnaire).count
      if total_choice.zero?
        ratings << { percent: 0, name: choice.name }
      else
        ratings << { percent: ((total_choice / total_answers) * 100), name: choice.name }
      end
    end

    return ratings
  end
end
