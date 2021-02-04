# == Schema Information
#
# Table name: reactions
#
#  id             :bigint           not null, primary key
#  emotion        :integer          default(0)
#  responder_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  event_id       :bigint
#  responder_id   :bigint
#
# Indexes
#
#  index_reactions_on_event_id                                      (event_id)
#  index_reactions_on_event_id_and_responder_id_and_responder_type  (event_id,responder_id,responder_type) UNIQUE
#  index_reactions_on_responder_type_and_responder_id               (responder_type,responder_id)
#
class Reaction < ApplicationRecord
  belongs_to :responder, polymorphic: true

  DEFAULT = 0
  LIKE = 1
  HEART = 2
  HAPPY = 3
  WOW = 4
  SAD = 5
  ANGRY = 6

  EMOTIONS = {
    DEFAULT => "Default",
    LIKE => "Like",
    HEART => "Heart",
    HAPPY => "Happy",
    WOW => "Wow",
    SAD => "Sad",
    ANGRY => "Angry"
  }

  validates :event_id, uniqueness: { scope: [:responder_id, :responder_type] }

  scope :default, -> { where(emotion: DEFAULT) }
  scope :like, -> { where(emotion: LIKE) }
  scope :heart, -> { where(emotion: HEART) }
  scope :happy, -> { where(emotion: HAPPY) }
  scope :wow, -> { where(emotion: WOW) }
  scope :sad, -> { where(emotion: SAD) }
  scope :angry, -> { where(emotion: ANGRY) }

  def default?
    emotion == DEFAULT
  end

  def like?
    emotion == LIKE
  end

  def heart?
    emotion == HEART
  end

  def happy?
    emotion == HAPPY
  end

  def wow?
    emotion == WOW
  end

  def sad?
    emotion == SAD
  end

  def angry?
    emotion == ANGRY
  end

  def emotion_name
    EMOTIONS[emotion]
  end

end
