class GuestListsController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :event

  def set_status
    guest_list = GuestList.find(params[:guest_list_id])
    new_params = status_params
    new_params[:approver_id] = current_admin.id
    response = update_guest_list_statuses([guest_list], new_params)

    redirect_to event_path(@event), notice: "Guest #{guest_list.user.full_name} updated successfully!"
  end

  def set_raffle_status
    guest_list = GuestList.find(params[:guest_list_id])
    response = update_raffle_statuses([guest_list], raffle_status_params)

    redirect_to event_path(@event), notice: "Guest #{guest_list.user.full_name} updated successfully!"
  end

  def reset_raffle_statuses
    winners = GuestList.where(event: @event).won
    raffle_statuses = { raffle_status: GuestList::ELIGIBLE }
    response = update_raffle_statuses(winners, raffle_statuses)

    redirect_to event_path(@event), notice: "Guests' raffle statuses reset successfully!"
  end

  def download_csv
    @guest_lists = GuestList.where(event: @event)
    respond_to do |format|
      format.html
      format.csv { send_data @guest_lists.to_csv(@event), filename: "#{@event.title}-guestlists-#{@event.start_date}-#{@event.end_date}.csv" }
    end
  end

  private

  def raffle_status_params
    params.require(:guest_list).permit(:raffle_status)
  end

  def status_params
    params.require(:guest_list).permit(:status)
  end

  def update_guest_list_statuses(guest_lists, params)
    guest_lists.each do |gl|
      gl.update_attributes(params)
    end
  end

  def update_raffle_statuses(guest_lists, status)
    guest_lists.each do |gl|
      gl.update_attributes(status)
    end
  end
end
