class HomeController < ApplicationController
  layout 'main'
  before_action :authenticate_user!, except: [:welcome, :find_event]
  before_action :fetch_reaction, except: [:welcome, :find_event]
  before_action -> { check_event_code params[:event_code] }, except: [:welcome]

  def index
    render_404 if @event.nil?

    GuestList.create_guest_list(current_user, @event)
    guest = GuestList.where(user: current_user, event: @event).first
    if guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    elsif guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def thank_you
    render_404 if @event.nil?

    guest = GuestList.where(user: current_user, event: @event).first
    if guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def denied
    render_404 if @event.nil?

    guest = GuestList.where(user: current_user, event: @event).first
    if guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    end
  end

  def welcome
    render layout: "application"
  end

  def find_event
    if @event.nil?
      flash.now[:alert] = 'Invalid Event Code!'
      render :welcome
    elsif @event.queued?
      flash.now[:alert] = 'Event not yet started!'
      render :welcome
    elsif @event.done?
      flash.now[:alert] = 'Event already done!'
      render :welcome
    elsif current_user.nil?
      redirect_to new_user_registration_path(event_code: @event.event_code)
    else
      redirect_to home_path(event_code: @event.event_code)
    end
  end

  private

  def fetch_reaction
    @reaction = current_user.reactions.first || current_user.reactions.new
  end

end
