class GuestListsController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :event

  def set_status
    guest_list = GuestList.find(params[:id])
    approver = User.find(id: params[:user_id])
    response = update_guest_list_statuses([guest_list], approver, params[:status])
    #render json: response, adapter: :json
  end

  def batch_approved
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @guest_lists = @event.guest_lists
    @guest_lists = @guest_lists.sorted.page(page).per(per_page)

    guest_lists = GuestList.where(id: params[:ids])
    approver = User.find(id: params[:user_id])
    response = update_guest_list_statuses(guest_lists, user, GuestList::APPROVED)

    #render json: response, adapter: :json
  end

  def batch_denied
    guest_lists = GuestList.where(id: params[:ids])
    approver = User.find(id: params[:user_id])
    response = update_guest_list_statuses(guest_lists, user, GuestList::DENIED)
    #render json: response, adapter: :json
  end

  def set_raffle_status

    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @guest_lists = @event.guest_lists
    @guest_lists = @guest_lists.sorted.page(page).per(per_page)
    guest_list = GuestList.find(params[:guest_list_id])
    response = update_raffle_statuses([guest_list], raffle_status_params)

    redirect_to event_path(@event), notice: "Guest #{guest_list.user.full_name} updated successfully!"
    #puts "======= #{response.inspect}"
  end

  def reset_raffle_statuses
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @guest_lists = @event.guest_lists
    @guest_lists = @guest_lists.sorted.page(page).per(per_page)
    winners = @guest_lists.won
    raffle_statuses = { raffle_status: GuestList::ELIGIBLE }
    response = update_raffle_statuses(winners, raffle_statuses)

    redirect_to event_path(@event), notice: "Guests' raffle statuses reset successfully!"
  end

  def batch_eligible
    guest_lists = GuestList.where(id: params[:ids])
    response = update_raffle_statuses(guest_lists, GuestList::ELIGIBLE)
    #render json: response, adapter: :json
  end

  def batch_not_eligible
    guest_lists = GuestList.where(id: params[:ids])
    response = update_raffle_statuses(guest_lists, GuestList::NOT_ELIGIBLE)
    #render json: response, adapter: :json
  end

  def download_csv
    page = params[:page] || 1
    per_page = params[:per_page] || 10
    search = params[:search]
    @guest_lists = @event.guest_lists
    guest_lists = @guest_list
    @guest_lists = @guest_lists.sorted.page(page).per(per_page)

    respond_to do |format|
      format.html
      format.csv { send_data guest_lists.to_csv, filename: "#{@event.title}-guestlists-#{@event.start_date}-#{@event.end_date}.csv" }
    end
  end

  private

  def raffle_status_params
    params.require(:guest_list).permit(:raffle_status)
  end

  def status_params
    params.require(:guest_list).permit(:status)
  end

  def update_guest_list_statuses(guest_lists, approver, status)
    guest_lists.each do |gl|
      gl.update_attributes(status: status, approver: approver)
    end
  end

  def update_raffle_statuses(guest_lists, status)
    puts "======== #{guest_lists}"
    puts "======== #{status}"
    guest_lists.each do |gl|
      gl.update_attributes(status)
    end
  end
end
