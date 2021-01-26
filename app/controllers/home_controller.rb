class HomeController < ApplicationController
  layout 'main'
  before_action :authenticate_user!, except: [:welcome, :find_event]

  def index
    @event = check_event_code(params[:event_code])
    render_404 if @event.nil?
    GuestList.create_guest_list(current_user, @event)
    guest = GuestList.where(user: current_user, event: @event).first
    if @event.private? && guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    elsif @event.private? && guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def thank_you
    @event = check_event_code(params[:event_code])
    render_404 if @event.nil?
    guest = GuestList.where(user: current_user, event: @event).first
    if @event.private? && guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif @event.private? && guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def denied
    @event = check_event_code(params[:event_code])
    render_404 if @event.nil?
    guest = GuestList.where(user: current_user, event: @event).first
    if @event.private? && guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif @event.private? && guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    end
  end

  def welcome
    render layout: "application"
  end

  def find_event
    @event = check_event_code(params[:event_code])
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

end
