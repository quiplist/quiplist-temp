class Api::V1::GuestListsController < Api::ApplicationController

  #load_and_authorize_resource :event

  before_action :set_event

  def index
    @guest_lists = @event.guest_lists.eligible
    render json: @guest_lists
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end
end
