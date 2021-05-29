class Api::V1::EventsController < Api::ApplicationController

  load_and_authorize_resource :event, only: [:show]
  before_action :set_event, only: [:fetch_current_event]

  def show
    render json: @event, include: [:guest_lists, :chats, :announcements, :raffles, :questionnaires]
  end

  def fetch_current_event
    render json: @event
  end
end
