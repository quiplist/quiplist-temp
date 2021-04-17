class UsersController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :user

  def index
    @users = if current_admin.admin?
      event_ids = current_admin.events.ids
      User.admin_users(event_ids)
    else
      @users
    end

    @users = @users.accessible_by(current_ability).sorted
  end

  def show
  end

  def reset_password
    @user = @user.generate_temporary_password
    if @user.save
      redirect_to user_path(@user), notice: "User #{@user.full_name} reset password successfully!"
    else
      @users = if current_admin.admin?
        event_ids = current_admin.events.ids
        User.admin_users(event_ids)
      else
        @users
      end
      @users = @users.accessible_by(current_ability).sorted
      render :index
    end
  end

  private

end
