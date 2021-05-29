# == Schema Information
#
# Table name: settings
#
#  id                            :bigint           not null, primary key
#  about_us_background           :string
#  about_us_background_color     :string           default("#3F48CC")
#  about_us_mouse_out            :string           default("#6C63FF")
#  about_us_mouse_over           :string           default("#861CCE")
#  about_us_spiel                :string
#  contact_us_background         :string
#  contact_us_background_color   :string           default("#3F48CC")
#  contact_us_email              :string
#  contact_us_mouse_out          :string           default("#6C63FF")
#  contact_us_mouse_over         :string           default("#861CCE")
#  contact_us_spiel              :string
#  image_assets                  :json
#  is_image                      :boolean          default(TRUE)
#  landing_page_background       :string
#  landing_page_background_color :string           default("#3F48CC")
#  landing_page_mouse_out        :string           default("#6C63FF")
#  landing_page_mouse_over       :string           default("#861CCE")
#  video_asset                   :string
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#
require 'test_helper'

class SettingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
