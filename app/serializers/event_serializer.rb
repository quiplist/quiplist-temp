class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :event_code

  has_many :guest_lists
  has_many :users, through: :guest_lists
  has_many :chats


end
