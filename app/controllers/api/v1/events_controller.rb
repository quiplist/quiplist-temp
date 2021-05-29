class Api::V1::EventsController < Api::ApplicationController

  before_action :doorkeeper_authorize!, only: [:fetch_current_event]
  load_and_authorize_resource :event, only: [:show]
  before_action :set_event, only: [:fetch_current_event]

  def show
    render json: @event, include: [:guest_lists, :chats, :announcements, :raffles, :questionnaires]
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
end
