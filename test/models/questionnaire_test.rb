# == Schema Information
#
# Table name: questionnaires
#
#  id                 :bigint           not null, primary key
#  correct_answer     :string
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
require 'test_helper'

class QuestionnaireTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
