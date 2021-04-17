# == Schema Information
#
# Table name: admins
#
#  id                 :bigint           not null, primary key
#  company            :string
#  contact_number     :string
#  email              :string           default(""), not null
#  encrypted_password :string           default(""), not null
#  full_name          :string
#  position           :string
#  profile_image      :string
#  reset_password     :boolean          default(FALSE)
#  role               :integer          default(2)
#  temporary_password :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_admins_on_email  (email) UNIQUE
#
require 'test_helper'

class AdminTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
