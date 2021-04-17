# == Schema Information
#
# Table name: questionnaires
#
#  id                 :bigint           not null, primary key
#  choices            :string           is an Array
#  correct_answer     :string           is an Array
#  question           :string
#  questionnaire_type :integer          default(0)
#  status             :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  event_id           :bigint
#
# Indexes
#
#  index_questionnaires_on_event_id  (event_id)
#
class QuestionnaireSerializer < ActiveModel::Serializer
  attributes :id, :correct_answer, :choices, :question, :questionnaire_type,
             :questionnaire_type_name, :status, :status_name, :event_id, :answered_correctly

  def status_name
    object.status_name
  end

  def answered_correctly
    object.answered_correctly
  end
end
