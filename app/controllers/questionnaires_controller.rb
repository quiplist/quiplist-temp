class QuestionnairesController < ApplicationController
  layout 'admin'

  before_action :authenticate_admin!
  load_and_authorize_resource :event
  load_and_authorize_resource :questionnaire, through: :event

  def show
  end
  
  def new
    filler_choices
  end

  def create
    if @questionnaire.save
      redirect_to event_path(@event), notice: "Questionnaire #{@questionnaire.questionnaire_type_name} added successfully!"
    else
      filler_choices
      render :new
    end
  end

  def edit
  end

  def update
    if @questionnaire.update_attributes questionnaire_params
      redirect_to event_path(@event), notice: "Questionnaire #{@questionnaire.questionnaire_type_name} updated successfully!"
    else
      render :edit
    end
  end

  def destroy
    @questionnaire.destroy
    redirect_to event_path(@event), notice: "Questionnaire deleted successfully!"
  end

  private

  def filler_choices
    (0..11).each do
      @questionnaire.choices.new
    end
  end

  def questionnaire_params
    params.require(:questionnaire).permit(:questionnaire_type, :question, :correct_answer, choices_attributes: [:id, :name])
  end
end
