class Api::V1::RafflesController < Api::ApplicationController

  before_action :set_raffle

  def show
    render json: @raffle
  end

  def update
    @raffle.update_attributes raffle_params
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
