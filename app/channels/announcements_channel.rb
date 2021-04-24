class AnnouncementsChannel < ApplicationCable::Channel
  before_subscribe :set_event, only: [:subscribed, :received]

  def subscribed
    # stream_from "some_channel"
    stream_for @event
  end

  def receive(data)
    AnnouncementsChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(data).as_json)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end
end
