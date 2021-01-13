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
    @event = Event.new
  end

  def show
    @users = User.client
  end

  def create
    if @event.save
      redirect_to event_path(@event), notice: "Event #{@event.title} added successfully!"
    else
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @events = Event.sorted
      @events = @events.search(search) if search.present?
      @events = @events.accessible_by(current_ability).sorted.page(page).per(per_page)
      render :index
    end
  end

  def update
    if @event.update_attributes event_params
      redirect_to event_path(@event), notice: "Event #{@event.title} updated successfully!"
    else
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @events = Event.sorted
      @events = @events.search(search) if search.present?
      @events = @events.accessible_by(current_ability).sorted.page(page).per(per_page)
      render :index
    end
  end

  def destroy
    @event.destroy
    redirect_to events_path, notice: "Event deleted successfully!"
  end

  def upload_brochure
    if @event.update_attributes upload_params
      redirect_to event_path(@event), notice: "brochure uploaded successfully!"
    else
      render :show
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :event_code,
      :start_date, :end_date, :start_time, :end_time, :event_type, :stream_type, :stream_key, :stream_video)
  end

  def upload_params
    params.require(:event).permit(:brochure)
  end
end
