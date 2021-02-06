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
      # page = params[:page] || 1
      # per_page = params[:per_page] || 10
      # search = params[:search]
      # @admins = Admin.sorted
      # @admins = @admins.search(search) if search.present?
      # @admins = @admins.accessible_by(current_ability).sorted.page(page).per(per_page)
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
  end

  def destroy_admin_events
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :password_confirmation, :contact_number,
      :full_name, :member_id, :member_type, :affiliation, :role, access_rights_attributes: [:id, :name, :privilege])
  end
end
