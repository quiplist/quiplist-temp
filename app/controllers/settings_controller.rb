class SettingsController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  authorize_resource :setting

  def index
    @setting = Setting.first
  end

  def update
  end

  private

end
