class HomeController < ApplicationController
  layout 'main'
  before_action :authenticate_user!, except: [:welcome, :find_event]

  def index
    @event = check_event_code(params[:event_code])
    if @event.nil?
      render_404
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
    else
      redirect_to new_user_registration_path(event_code: @event.event_code)
    end
  end

end
