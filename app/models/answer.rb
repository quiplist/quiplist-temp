# == Schema Information
#
# Table name: answers
#
#  id               :bigint           not null, primary key
#  answer           :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  guest_list_id    :bigint
#  questionnaire_id :bigint
#
# Indexes
#
#  index_answers_on_guest_list_id     (guest_list_id)
#  index_answers_on_questionnaire_id  (questionnaire_id)
#
class Answer < ApplicationRecord
  belongs_to :questionnaire
  belongs_to :guest_list
end
