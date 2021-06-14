# == Schema Information
#
# Table name: events
#
#  id                              :bigint           not null, primary key
#  background_music                :string
#  brochure                        :string
#  description                     :string
#  disable_expo_games              :boolean          default(FALSE)
#  end_date                        :date
#  end_time                        :datetime
#  event_code                      :string
#  event_type                      :integer          default(0)
#  has_background_music            :boolean          default(FALSE)
#  has_expo                        :boolean          default(FALSE)
#  include_abo_number              :boolean          default(TRUE)
#  include_abo_type                :boolean          default(TRUE)
#  include_aes_number              :boolean          default(TRUE)
#  include_affiliation             :boolean          default(TRUE)
#  include_company                 :boolean          default(TRUE)
#  include_contact_number          :boolean          default(TRUE)
#  include_distributor_number      :boolean          default(TRUE)
#  include_distributor_type        :boolean          default(TRUE)
#  include_employee_number         :boolean          default(TRUE)
#  include_id_number               :boolean          default(TRUE)
#  include_mailing_address         :boolean          default(TRUE)
#  include_member_company          :boolean          default(TRUE)
#  include_member_type             :boolean          default(TRUE)
#  include_upline                  :boolean          default(TRUE)
#  include_who_invited_you         :boolean          default(TRUE)
#  main_background                 :string
#  main_background_color           :string           default("#fefefe")
#  main_mouse_out                  :string           default("#0A48AC")
#  main_mouse_over                 :string           default("#007bff")
#  random_name_background          :string
#  random_name_background_color    :string           default("#3F48CC")
#  random_name_draw_mouse_out      :string           default("#6C63FF")
#  random_name_draw_mouse_over     :string           default("#861CCE")
#  random_name_winner_mouse_out    :string           default("#6C63FF")
#  random_name_winner_mouse_over   :string           default("#861CCE")
#  random_number_background        :string
#  random_number_background_color  :string           default("#3F48CC")
#  random_number_draw_mouse_out    :string           default("#6C63FF")
#  random_number_draw_mouse_over   :string           default("#861CCE")
#  random_number_winner_mouse_out  :string           default("#6C63FF")
#  random_number_winner_mouse_over :string           default("#861CCE")
#  required_abo_number             :boolean          default(FALSE)
#  required_abo_type               :boolean          default(TRUE)
#  required_aes_number             :boolean          default(FALSE)
#  required_affiliation            :boolean          default(FALSE)
#  required_company                :boolean          default(FALSE)
#  required_contact_number         :boolean          default(FALSE)
#  required_distributor_number     :boolean          default(FALSE)
#  required_distributor_type       :boolean          default(TRUE)
#  required_employee_number        :boolean          default(FALSE)
#  required_id_number              :boolean          default(FALSE)
#  required_mailing_address        :boolean          default(FALSE)
#  required_member_company         :boolean          default(FALSE)
#  required_member_type            :boolean          default(FALSE)
#  required_upline                 :boolean          default(FALSE)
#  required_who_invited_you        :boolean          default(FALSE)
#  session_background              :string
#  session_background_color        :string           default("#3F48CC")
#  session_mouse_out               :string           default("#6C63FF")
#  session_mouse_over              :string           default("#861CCE")
#  spin_a_wheel_background         :string
#  spin_a_wheel_background_color   :string           default("#3F48CC")
#  spin_a_wheel_draw_mouse_out     :string           default("#6C63FF")
#  spin_a_wheel_draw_mouse_over    :string           default("#861CCE")
#  spin_a_wheel_winner_mouse_out   :string           default("#6C63FF")
#  spin_a_wheel_winner_mouse_over  :string           default("#861CCE")
#  start_date                      :date
#  start_time                      :datetime
#  status                          :integer          default(0)
#  stream_key                      :string
#  stream_type                     :integer
#  stream_video                    :string
#  title                           :string
#  with_guest_abo_type             :boolean          default(TRUE)
#  with_guest_distributor_type     :boolean          default(TRUE)
#  with_guest_member_type          :boolean          default(TRUE)
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  include_member_id               :boolean          default(TRUE)
#  required_member_id              :boolean          default(FALSE)
#
class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :event_code, :main_background, :main_background_color,
    :main_mouse_out, :main_mouse_over, :session_background, :session_background_color,
    :session_mouse_out, :session_mouse_over, :brochure, :stream_key, :brochure_url,
    :spin_a_wheel_background, :spin_a_wheel_background_color, :spin_a_wheel_draw_mouse_over,
    :spin_a_wheel_draw_mouse_out, :spin_a_wheel_winner_mouse_over, :spin_a_wheel_winner_mouse_out,
    :random_name_background, :random_name_background_color, :random_name_draw_mouse_over,
    :random_name_draw_mouse_out, :random_name_winner_mouse_over, :random_name_winner_mouse_out,
    :random_number_background, :random_number_background_color, :random_number_draw_mouse_over,
    :random_number_draw_mouse_out, :random_number_winner_mouse_over, :random_number_winner_mouse_out,
    :has_expo, :has_background_music, :disable_expo_games, :background_music

  has_many :guest_lists
  has_many :users, through: :guest_lists
  has_many :chats
  has_many :announcements
  has_many :raffles
  has_many :questionnaires
  has_many :feed_backs

  def brochure_url
    object.has_brochure? ? object.brochure.url : ""
  end


end
