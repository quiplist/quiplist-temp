# == Schema Information
#
# Table name: events
#
#  id                       :bigint           not null, primary key
#  brochure                 :string
#  description              :string
#  end_date                 :date
#  end_time                 :datetime
#  event_code               :string
#  event_type               :integer          default(0)
#  main_background          :string
#  main_background_color    :string           default("#3F48CC")
#  main_mouse_out           :string           default("#6C63FF")
#  main_mouse_over          :string           default("#861CCE")
#  session_background       :string
#  session_background_color :string           default("#3F48CC")
#  session_mouse_out        :string           default("#6C63FF")
#  session_mouse_over       :string           default("#861CCE")
#  start_date               :date
#  start_time               :datetime
#  status                   :integer          default(0)
#  stream_key               :string
#  stream_type              :integer
#  stream_video             :string
#  title                    :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
