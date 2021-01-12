class EventsController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :event

  def index
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @events = @events.search(search) if search.present?
    @events = @events.accessible_by(current_ability).sorted.page(page).per(per_page)
  end

  def show
    @users = User.client
  end

  def new
  end

  def create
    if @event.save
      redirect_to event_path(@event), notice: "Event #{@event.title} added successfully!"
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @event.update_attributes event_params
      redirect_to event_path(@event), notice: "Event #{@event.title} updated successfully!"
    else
      render :edit
    end
  end

  def destroy
    @event.destroy
    redirect_to events_path
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :event_code,
      :start_date, :end_date, :start_time, :end_time, :event_type, :stream_type, :stream_key, :stream_video)
  end
end
