class AdminsController < ApplicationController
  layout 'admin'
  #layout 'raffle', only: [:draw_raffles]

  before_action :authenticate_admin!
  load_and_authorize_resource :admin

  def index
    @admins = @admins.accessible_by(current_ability).sorted
  end

  def show
    @admin_events = AdminEvent.where(admin: @admin)
    @admin_event = @admin.admin_events.new
    ids = @admin.events.ids
    @events = Event.where.not(id: ids)
  end

  def new
    AccessRight::NAMES.each do |key, value|
      @admin.access_rights.new(name: key)
    end
  end

  def create
    if @admin.save
      redirect_to admin_path(@admin), notice: "admin #{@admin.full_name} added successfully!"
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @admin.update_attributes admin_params
      redirect_to admin_path(@admin), notice: "Admin #{@admin.full_name} updated successfully!"
    else
      @admin_events = @admin.admin_events
      @admin_event = @admin.admin_events.new
      @events = Event.all
      render :edit
    end
  end

  def destroy
    if @admin.id == current_admin.id
      redirect_to admins_path, alert: "You could not delete yourself."
    elsif @admin.admin?
      @admin.destroy
      redirect_to admins_path, notice: "Admin deleted successfully!"
    elsif @admin.super_admin? && !Admin.last_super_admin?
      @admin.destroy
      redirect_to admins_path, notice: "Admin deleted successfully!"
    else
      redirect_to admins_path, alert: "You could not delete the last super admin."
    end
  end

  def create_admin_events
    @admin_event = AdminEvent.new(admin_events_params)
    if @admin_event.save
      redirect_to admin_path(@admin), notice: "Event #{@admin_event.event.title} added successfully to #{@admin.full_name}!"
    else
      @admin_events = @admin.admin_events
      @admin_event = @admin.admin_events.new
      ids = @admin.events.ids
      @events = Event.where.not(id: ids)
      render :show
    end
  end

  def destroy_admin_events
    @admin_event = AdminEvent.find(params[:admin_event_id])
    @admin_event.destroy
    redirect_to admin_path(@admin), notice: "Admin Event deleted successfully!"
  end

  def reset_password
    @admin = @admin.generate_temporary_password
    if @admin.save
      redirect_to admin_path(@admin), notice: "Admin #{@admin.full_name} reset password successfully!"
    else
      @admins = @admins.accessible_by(current_ability).sorted
      render :index
    end
  end

  def profile
    @admin = @current_admin
  end

  def update_profile
    @admin = @current_admin
    if @admin.update_attributes admin_params
      redirect_to profile_admins_path, notice: "Profile updated successfully!"
    else
      render :profile
    end
  end

  # def change_password
  #   @admin = @current_admin
  # end
  #
  # def update_password
  #   @admin = @current_admin
  #   if @admin.update_attributes admin_params
  #     redirect_to profile_admins_path, notice: "Profile updated successfully!"
  #   else
  #     render :profile
  #   end
  # end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :password_confirmation, :contact_number,
      :full_name, :position, :company, :role, access_rights_attributes: [:id, :name, :privilege])
  end

  # def change_password_params
  #   params.require(:admin).permit(:current_password, :password, :password_confirmation)
  # end

  def admin_events_params
    params.require(:admin_event).permit(:event_id, :admin_id)
  end
end
