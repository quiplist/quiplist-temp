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
class Questionnaire < ApplicationRecord
  has_many :answered_correctly, class_name: "Answer"
  belongs_to :event

  MULTIPLE_CHOICE = 0
  YES_OR_NO = 1
  IDENTIFICATION = 2
  SELECT_LETTERS = 3
  Q_AND_A = 4
  POLL = 5

  QUESTIONNAIRE_TYPES = {
    MULTIPLE_CHOICE => "Multiple Choice",
    YES_OR_NO => "Yes or No",
    IDENTIFICATION => "Indentification",
    SELECT_LETTERS => "Select Letters",
    Q_AND_A => "Question and Answer",
    POLL => "Poll"
  }

  QUEUED = 0
  ONGOING = 1
  DONE = 2

  STATUSES = {
    QUEUED => "Queued",
    ONGOING => "On going",
    DONE => "Done"
  }

  scope :queued, -> { where(status: QUEUED) }
  scope :ongoing, -> { where(status: ONGOING) }
  scope :done, -> { where(status: DONE) }
  scope :sorted, -> { order(created_at: :asc) }

  def queued?
    status == QUEUED
  end

  def ongoing?
    status == ONGOING
  end

  def done?
    status == DONE
  end

  def multiple_choice?
    questionnaire_type == MULTIPLE_CHOICE
  end

  def yes_or_no?
    questionnaire_type == YES_OR_NO
  end

  def indentification?
    questionnaire_type == IDENTIFICATION
  end

  def select_letters?
    questionnaire_type == SELECT_LETTERS
  end

  def q_and_a?
    questionnaire_type == Q_AND_A
  end

  def poll?
    questionnaire_type == POLL
  end

  def questionnaire_type_name
    QUESTIONNAIRE_TYPES[questionnaire_type]
  end

  def status_name
    STATUSES[status]
  end
end
