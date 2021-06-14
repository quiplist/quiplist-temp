class GamesController < ApplicationController
  layout false

  before_action :authenticate_user!
  before_action -> { check_event_code params[:event_code] }

  def memory_game
    render_404 if @event.nil?
    @guest = GuestList.invitation(current_user, @event)
    @current_user = current_user
  end

  def fishing_boat
    render_404 if @event.nil?
    @guest = GuestList.invitation(current_user, @event)
    @current_user = current_user
  end

end
