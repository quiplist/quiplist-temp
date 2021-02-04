class Api::ApplicationController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token
  before_action :set_current_user
  before_action :authenticate!

  def authenticate!
    if @current_user == current_admin
      :authenticate_admin!
    elsif @current_user == current_user
      :authenticate_user!
    end
  end

  def set_current_user
    @current_user = current_user || current_admin
  end

end
