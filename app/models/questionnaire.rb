# == Schema Information
#
# Table name: questionnaires
#
#  id                 :bigint           not null, primary key
#  answer             :string           is an Array
#  choices            :string           is an Array
#  question           :string
#  questionnaire_type :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  event_id           :bigint
#
# Indexes
#
#  index_questionnaires_on_event_id  (event_id)
#
class Questionnaire < ApplicationRecord
  has_many :answers
  belongs_to :event

  MULTIPLE_CHOICE = 0
  YES_OR_NO = 1
  INPUT_ANSWER = 2
  SELECT_LETTERS = 3
  Q_AND_A = 4
  POLL = 5

  QUESTIONNAIRE_TYPES = {
    MULTIPLE_CHOICE => "Multiple Choice",
    YES_OR_NO => "Yes or No",
    INPUT_ANSWER => "Input Answer",
    SELECT_LETTERS => "Select Letters",
    Q_AND_A => "Question and Answer",
    POLL => "Poll"
  }
end
