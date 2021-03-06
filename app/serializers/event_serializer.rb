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
#  main_background_color    :string           default("#fefefe")
#  main_mouse_out           :string           default("#0A48AC")
#  main_mouse_over          :string           default("#007bff")
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
class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :event_code, :main_mouse_out, :main_mouse_over

  has_many :guest_lists
  has_many :users, through: :guest_lists
  has_many :chats


end
