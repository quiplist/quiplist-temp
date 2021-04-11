class Api::V1::AnnouncementsController < Api::ApplicationController
  before_action -> { set_event params[:event_id] }, only: [:index, :create]

  def index
    @announcement = @event.announcements.last
    render json: @announcement
  end

  def create
    @announcement = Announcement.new(announcement_params)
    if @announcement.save
        puts "successfully saved a announcement!"
        AnnouncementsChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(@announcement).as_json)
    end
    render json: @announcement
  end

  private

  def announcement_params
    params.require(:announcement).permit(:message, :admin_id, :event_id)
  end

  def set_event(id)
    @event = Event.find(id)
  end
end
