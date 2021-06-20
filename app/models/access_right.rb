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
  QUESTIONNAIRE = 3
  ADMIN = 4
  CLIENT = 5
  GAME_APPLICATION = 7
  FEED_BACK = 8


  NAMES = {
    EVENT => "Events",
    GUEST_LIST => "Guest Lists",
    RAFFLE => "Raffles",
    QUESTIONNAIRE => "Questionnaires",
    FEED_BACK => "Feed Back",
    ADMIN => "Admins",
    CLIENT => "Clients",
    GAME_APPLICATION => "Game Application Settings"
  }

  VIEW_ONLY = 0
  FULL_ACCESS = 1
  NO_ACCESS = 2

  PRIVILEGES = {
    VIEW_ONLY => "View Only",
    FULL_ACCESS => "Full Access",
    NO_ACCESS => "No Access"
  }

  scope :event, -> { find_by(name: EVENT) }
  scope :guest_list, -> { find_by(name: GUEST_LIST) }
  scope :raffle, -> { find_by(name: RAFFLE) }
  scope :questionnaire, -> { find_by(name: QUESTIONNAIRE) }
  scope :admin, -> { find_by(name: ADMIN) }
  scope :client, -> { find_by(name: CLIENT) }
  scope :game_application, -> { find_by(name: GAME_APPLICATION) }
  scope :feed_back, -> { find_by(name: FEED_BACK) }



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
