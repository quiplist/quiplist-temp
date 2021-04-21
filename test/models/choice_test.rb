# == Schema Information
#
# Table name: choices
#
#  id               :bigint           not null, primary key
#  name             :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  questionnaire_id :bigint
#
# Indexes
#
#  index_choices_on_questionnaire_id  (questionnaire_id)
#
require 'test_helper'

class ChoiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
