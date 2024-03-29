# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  abo_number             :string
#  abo_type               :integer          default(4)
#  aes_number             :string
#  affiliation            :string
#  company                :string
#  contact_number         :string
#  distributor_number     :string
#  distributor_type       :integer          default(7)
#  email                  :string           default(""), not null
#  employee_number        :string
#  encrypted_password     :string           default(""), not null
#  full_name              :string
#  id_number              :string
#  mailing_address        :string
#  member_company         :string
#  member_type            :integer          default(0)
#  profile_image          :string
#  remember_created_at    :datetime
#  reset_password         :boolean          default(FALSE)
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default(2)
#  temporary_password     :string
#  upline                 :string
#  who_invited_you        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  member_id              :string
#  unique_session_id      :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_unique_session_id     (unique_session_id) UNIQUE
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
