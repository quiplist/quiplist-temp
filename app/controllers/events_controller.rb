  class EventsController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  before_action :fetch_reaction, only: [:launch]
  load_and_authorize_resource :event

  def index
    @events = Event.joins(:admin_events).where(admin_events: { admin: @current_user } ) if @current_user.admin?
    @events = @events.sorted
    @event = Event.new
  end

  def show
    @guest_lists = GuestList.where(event: @event)
    @guest_lists = @guest_lists.sorted

    @raffles = Raffle.where(event: @event)
    @raffles = @raffles.sorted

    @questionnaires = Questionnaire.where(event: @event)
    @questionnaires = @questionnaires.sorted

    @feed_backs = FeedBack.where(event: @event)
    @feed_backs = @feed_backs.sorted
  end

  def create
    if @event.save
      redirect_to event_path(@event), notice: "Event #{@event.title} added successfully!"
    else
      @events = Event.all
      @events = Event.joins(:admin_events).where(admin_events: { admin: @current_user } ) if @current_user.admin?
      @events = @events.sorted
      @isCreate = true
      render :index
    end
  end

  def update
    if @event.update_attributes event_params
      redirect_to event_path(@event), notice: "Event #{@event.title} updated successfully!"
    else
      @events = Event.all
      @events = Event.joins(:admin_events).where(admin_events: { admin: @current_user } ) if @current_user.admin?
      @events = @events.sorted
      @isUpdate = true
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
      @guest_lists = GuestList.where(event: @event)
      @guest_lists = @guest_lists.sorted

      @raffles = Raffle.where(event: @event)
      @raffles = @raffles.sorted

      @questionnaires = Questionnaire.where(event: @event)
      @questionnaires = @questionnaires.sorted
      render :show
    end
  end

  # def set_raffle_status
  #   page = params[:page] || 1
  #   per_page = params[:per_page] || 10
  #   search = params[:search]
  #   @guest_lists = @event.guest_lists
  #   @guest_lists = @guest_lists.sorted.page(page).per(per_page)
  #   guest_list = GuestList.find(params[:guest_list_id])
  #   response = update_raffle_statuses([guest_list], raffle_status_params)
  #
  #   redirect_to events_path, notice: "Guest #{guest_list.user.full_name} updated successfully!"
  # end

  def launch
  end

  def expo
    return redirect_to event_path(@event), alert: "Expo feature is not avaible for this event." unless @event.has_expo?
    render layout: "expo"
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :event_code,
      :start_date, :end_date, :start_time, :end_time, :event_type,
      :stream_type, :stream_key, :stream_video, :status, :session_background,
      :session_mouse_out, :session_mouse_over, :session_background_color,
      :main_background, :main_mouse_out, :main_mouse_over, :main_background_color,
      :include_abo_number, :required_abo_number, :include_aes_number, :required_aes_number,
      :include_affiliation, :required_affiliation, :include_company, :required_company,
      :include_contact_number, :required_contact_number, :include_distributor_number,
      :required_distributor_number, :include_employee_number, :required_employee_number,
      :include_id_number, :required_id_number, :include_mailing_address, :required_mailing_address,
      :include_member_company, :required_member_company, :include_member_id, :required_member_id,
      :include_member_type, :required_member_type, :include_upline, :required_upline, :include_who_invited_you,
      :required_who_invited_you, :include_abo_type, :include_distributor_type, :required_abo_type,
      :required_distributor_type, :with_guest_member_type, :with_guest_abo_type, :with_guest_distributor_type,
      :random_name_background, :random_name_background_color, :random_name_draw_mouse_out, :random_name_draw_mouse_over,
      :random_name_winner_mouse_out, :random_name_winner_mouse_over, :random_number_background, :random_number_background_color,
      :random_number_draw_mouse_out, :random_number_draw_mouse_over, :random_number_winner_mouse_out, :random_number_winner_mouse_over,
      :spin_a_wheel_background, :spin_a_wheel_background_color, :spin_a_wheel_draw_mouse_out, :spin_a_wheel_draw_mouse_over,
      :spin_a_wheel_winner_mouse_out, :spin_a_wheel_winner_mouse_over, :has_expo, :has_background_music, :disable_expo_games,
      :background_music, :disable_main_event, :random_name_winner_background_color, :random_number_winner_background_color,
      :spin_a_wheel_winner_background_color, :random_name_winner_font_color, :random_number_winner_font_color, :spin_a_wheel_winner_font_color,
      :random_name_font_color, :random_number_font_color, :spin_a_wheel_font_color
    )
  end

  def upload_params
    params.require(:event).permit(:brochure)
  end

  def winner_params
    params.require(:guest_list).permit(:raffle_status)
  end

  def fetch_reaction
    @reaction = current_admin.reactions.first || current_admin.reactions.new
  end
end
