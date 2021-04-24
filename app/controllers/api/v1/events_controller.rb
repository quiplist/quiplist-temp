class Api::V1::EventsController < Api::ApplicationController

  load_and_authorize_resource :event

  def show
    render json: @event, include: [:guest_lists, :chats, :announcements, :raffles, :questionnaires]
  end
end
