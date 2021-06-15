class QuestionnairesController < ApplicationController
  layout 'admin', except: [:show]

  before_action :authenticate_admin!
  load_and_authorize_resource :event
  load_and_authorize_resource :questionnaire, through: :event

  def show
    if @questionnaire.multiple_choice? || @questionnaire.yes_or_no? || @questionnaire.select_letters?
      @correctly_answered = Answer.correctly_answered(@questionnaire.correct_answer, @questionnaire).sorted.take(10)
    elsif @questionnaire.poll?
      @ratings = Answer.get_rating(@questionnaire)
    end
    render layout: "no_layout"
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
