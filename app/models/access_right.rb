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
class AccessRight < ApplicationRecord

  belongs_to :admin

  EVENT = 0
  GUEST_LIST = 1
  RAFFLE = 2
  QUESTIONAIRE = 3
  ADMIN = 4
  CLIENT = 5


  NAMES = {
    EVENT => "Events",
    GUEST_LIST => "Guest Lists",
    RAFFLE => "Raffles",
    QUESTIONAIRE => "Questionnaires",
    ADMIN => "Admins",
    CLIENT => "Clients"
  }

  VIEW_ONLY = 0
  FULL_ACCESS = 1
  NO_ACCESS = 2

  PRIVILEGES = {
    VIEW_ONLY => "View Only",
    FULL_ACCESS => "Full Access",
    NO_ACCESS => "No Access"
  }

  def access_right_name
    NAMES[name]
  end

  def privilege_name
    PRIVILEGES[privilege]
  end

  def view_only?
    privilege == VIEW_ONLY
  end

  def full_access?
    privilege == FULL_ACCESS
  end

  def no_access?
    privilege == NO_ACCESS
  end

end
