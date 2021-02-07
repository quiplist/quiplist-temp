# == Schema Information
#
# Table name: access_rights
#
#  id         :bigint           not null, primary key
#  name       :integer
#  privilege  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  admin_id   :bigint
#
# Indexes
#
#  index_access_rights_on_admin_id  (admin_id)
#
require 'test_helper'

class AccessRightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
