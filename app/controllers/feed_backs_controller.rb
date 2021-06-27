class FeedBacksController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :event
  load_and_authorize_resource :feed_back, through: :event

  def new
  end

  def create
    if @feed_back.save
      redirect_to event_path(@event), notice: "Feed Back #{@feed_back.question} added successfully!"
    else
      render :new
    end
  end

  def edit
  end

  def show
  end

  def update
    if @feed_back.update_attributes feed_back_params
      redirect_to event_path(@event), notice: "Feed Back #{@feed_back.question} updated successfully!"
    else
      render :edit
    end
  end

  def destroy
    @feed_back.destroy
    redirect_to event_path(@event), notice: "Feed Back deleted successfully!"
  end

  def download_csv
    @feed_back = FeedBack.find(params[:id])
    respond_to do |format|
      format.html
      format.csv { send_data @feed_back.to_csv(@feed_back), filename: "#{@feed_back.question}.csv" }
    end
  end

  private

  def feed_back_params
    params.require(:feed_back).permit(:question, :question_type)
  end
end
