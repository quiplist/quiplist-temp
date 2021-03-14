class UsersController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :user

  def index
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @users = if current_admin.admin?
      event_ids = current_admin.events.ids
      User.admin_users(event_ids)
    else
      @users
    end

    @users = @users.search(search) if search.present?
    @users = @users.accessible_by(current_ability).sorted.page(page).per(per_page)
  end

  def show
  end

  private

end
