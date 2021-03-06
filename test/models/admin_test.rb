# == Schema Information
#
# Table name: admins
#
#  id                 :bigint           not null, primary key
#  affiliation        :string
#  contact_number     :string
#  email              :string           default(""), not null
#  encrypted_password :string           default(""), not null
#  full_name          :string
#  member_type        :integer          default(0)
#  profile_image      :string
#  role               :integer          default(2)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  member_id          :string
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
