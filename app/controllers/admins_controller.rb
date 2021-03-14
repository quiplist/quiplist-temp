class AdminsController < ApplicationController
  layout 'admin'
  #layout 'raffle', only: [:draw_raffles]

  before_action :authenticate_admin!
  load_and_authorize_resource :admin

  def index
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @admins = @admins.search(search) if search.present?
    @admins = @admins.accessible_by(current_ability).sorted.page(page).per(per_page)
  end

  def show
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @admin_events = @admin.admin_events
    @admin_events = @admin_events.page(page).per(per_page)
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
      # page = params[:page] || 1
      # per_page = params[:per_page] || 10
      # search = params[:search]
      # @admins = Admin.sorted
      # @admins = @admins.search(search) if search.present?
      # @admins = @admins.accessible_by(current_ability).sorted.page(page).per(per_page)
      render :new
    end
  end

  def edit
  end

  def update
    if @admin.update_attributes admin_params
      redirect_to admin_path(@admin), notice: "Admin #{@admin.full_name} updated successfully!"
    else
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @admin_events = @admin.admin_events
      @admin_events = @admin_events.page(page).per(per_page)
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
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @admin_events = @admin.admin_events
      @admin_events = @admin_events.page(page).per(per_page)
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
      page = params[:page] || 1
      per_page = params[:per_page] || 10
      search = params[:search]
      @admins = @admins.search(search) if search.present?
      @admins = @admins.accessible_by(current_ability).sorted.page(page).per(per_page)
      render :index
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :password_confirmation, :contact_number,
      :full_name, :member_id, :member_type, :affiliation, :role, access_rights_attributes: [:id, :name, :privilege])
  end

  def admin_events_params
    params.require(:admin_event).permit(:event_id, :admin_id)
  end
end
