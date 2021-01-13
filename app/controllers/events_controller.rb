  class EventsController < ApplicationController
  #layout 'false'
  layout 'admin', only: [:index, :show]
  #layout 'raffle', only: [:draw_raffles]

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
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @guest_lists = @event.guest_lists
    @guest_lists = @guest_lists.sorted.page(page).per(per_page)
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
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @guest_lists = @event.guest_lists
      @guest_lists = @guest_lists.sorted.page(page).per(per_page)
      render :show
    end
  end

  def draw_raffles
    guest_lists = @event.guest_lists.eligible
    winner_id = GuestList.winner(guest_lists)
    if winner_id.nil?
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @guest_lists = @event.guest_lists
      @guest_lists = @guest_lists.sorted.page(page).per(per_page)
      flash.now[:alert] = 'No more contestant'
      render :show
    else
      @guest_list = GuestList.find(winner_id)
      @winner = @guest_list.user
      render layout: "raffle"
    end
  end

  def draw_winner
    @guest_list = GuestList.find(params[:guest_list_id])
    if @guest_list.update_attributes winner_params
      redirect_to event_path(@event)
    else
      render :draw_raffles
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

  def winner_params
    params.require(:guest_list).permit(:raffle_status)
  end
end
