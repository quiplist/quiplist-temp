class HomeController < ApplicationController
  layout 'main'
  before_action :authenticate_user!

  def index
    @event = Event.first
  end

end
