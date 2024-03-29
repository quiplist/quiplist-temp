class RafflesController < ApplicationController
  layout 'admin', except: [:show]

  before_action :authenticate_admin!
  load_and_authorize_resource :event
  load_and_authorize_resource :raffle, through: :event

  def new
  end

  def create
    if @raffle.save
      redirect_to event_path(@event), notice: "Raffle #{@raffle.raffle_type_name} added successfully!"
    else
      render :new
    end
  end

  def edit
  end

  def show
    @guest_lists = @event.guest_lists.approved.eligible
    if @guest_lists.empty?
      redirect_to launch_event_path(@event), alert: 'No player available to draw!'
    else
      render layout: "no_layout"
    end
  end

  def update
    if @raffle.update_attributes raffle_params
      redirect_to event_path(@event), notice: "Raffle #{@raffle.raffle_type_name} updated successfully!"
    else
      render :edit
    end
  end

  def destroy
    @raffle.destroy
    redirect_to event_path(@event), notice: "Raffle deleted successfully!"
  end

  private

  def raffle_params
    params.require(:raffle).permit(:raffle_type, :prize)
  end
end
