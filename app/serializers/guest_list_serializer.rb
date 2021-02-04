class GuestListSerializer < ActiveModel::Serializer
  attributes :id, :raffle_number, :user

  def user
    object.user
  end
end
