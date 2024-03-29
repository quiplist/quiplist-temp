class Api::V1::EventsController < Api::ApplicationController

  before_action :doorkeeper_authorize!, only: [:fetch_current_event]
  load_and_authorize_resource :event, only: [:show]
  before_action :set_event, only: [:fetch_current_event, :update]

  def show
    render json: @event, include: [:chats, :announcements]
  end

  def update
    if @event.update event_params
        EventsChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(@event).as_json)
    end
    render json: @event
  end

  def fetch_current_event
    render json: @event, serializer: EventMinimalSerializer
  end

  private

  def set_event
    @event = Event.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.to_s }, status: :not_found
  end

  def event_params
    params.require(:event).permit(:disable_expo_games, :disable_main_event)
  end
end
