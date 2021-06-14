class Api::V1::FeedBacksController < Api::ApplicationController
  before_action -> { set_event params[:event_id] }, only: [:index, :create]

  def create
    @announcement = Announcement.new(announcement_params)
    @announcement.save
    render json: @announcement
  end

  private

  def announcement_params
    params.require(:announcement).permit(:message, :admin_id, :event_id, :display_annoucement, :on_expo)
  end

  def set_event(id)
    @event = Event.find(id)
  end
end
