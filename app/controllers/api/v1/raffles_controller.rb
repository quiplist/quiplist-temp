class Api::V1::RafflesController < Api::ApplicationController

  before_action :set_raffle, except: [:index]

  def index
    page = params[:page] || 1
    per_page = 1
    @raffle = Raffle.where(event_id: params[:event_id]).page(page).per(per_page)
    render json: @raffle,
           meta: pagination(@raffle),
           adapter: :json
  end

  def show
    render json: @raffle
  end

  def update
    if @raffle.update_attributes raffle_params
      @guest_list = GuestList.find(@raffle.guest_list_id)
      @guest_list.update_attributes(raffle_status: GuestList::WON)
    end
    render json: @raffle
  end

  private

  def set_raffle
    @raffle = Raffle.find(params[:id])
  end

  def raffle_params
    params.require(:raffle).permit(:guest_list_id, :status)
  end
end
