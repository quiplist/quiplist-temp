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
class Answer < ApplicationRecord
  belongs_to :questionnaire, optional: true
  belongs_to :user

  default_scope { order("created_at ASC") }

  scope :correctly_answered, ->(answer, questionnaire) { where(answer: answer, questionnaire: questionnaire) }
  scope :sorted, -> { order(created_at: :asc) }

  before_create :set_default_pinned

  def set_default_pinned
    if self.questionnaire.answered_correctly.empty?
      self.pinned = true
    end
  end


  def self.get_rating(questionnaire)
    ratings = []
    total_answers = questionnaire.answered_correctly.count
    return ratings if total_answers.zero?
    questionnaire.choices.each do |choice|
      total_choice_answer = Answer.correctly_answered(choice.name, questionnaire).count
      if total_choice_answer.zero?
        ratings << { percent: 0, name: choice.name }
      else
        percent = ((total_choice_answer.to_f / total_answers.to_f) * 100)
        ratings << { percent: percent, name: choice.name }
      end
    end

    return ratings
  end

  def self.get_correctly_answer_identification(questionnaire)
    corrent_answer = questionnaire.correct_answer
    correctly_answered = Answer.where(questionnaire: questionnaire).where("answer ILIKE ?", "%#{corrent_answer}%")
    return correctly_answered
  end
end
