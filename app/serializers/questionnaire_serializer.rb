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
             :questionnaire_type_name, :status, :status_name, :event_id, :answered_correctly,
             :is_done, :is_ongoing, :is_queued, :is_multiple_choice, :is_yes_or_no, :is_identification,
             :is_select_letters, :is_q_and_a, :is_poll

  def status_name
    object.status_name
  end

  def answered_correctly
    object.answered_correctly
  end

  def is_done
    object.done?
  end

  def is_ongoing
    object.ongoing?
  end

  def is_queued
    object.queued?
  end

  def is_multiple_choice
    object.multiple_choice?
  end

  def is_yes_or_no
    object.yes_or_no?
  end

  def is_identification
    object.identification?
  end

  def is_select_letters
    object.select_letters?
  end

  def is_q_and_a
    object.q_and_a?
  end

  def is_poll
    object.poll?
  end

end
