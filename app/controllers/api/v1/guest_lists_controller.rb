class Api::V1::GuestListsController < Api::ApplicationController

  #load_and_authorize_resource :event
  before_action :doorkeeper_authorize!, only: [:show]
  before_action :set_event, only: [:index]
  before_action :set_guest_list, only: [:show]

  def index
    @guest_lists = @event.guest_lists.approved.eligible
    render json: @guest_lists
  end

  def show
    render json: @guest_list
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def set_guest_list
    @guest_list = GuestList.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.to_s }, status: :not_found
  end
end
