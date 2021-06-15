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
    elsif @questionnaire.identification?
      @correctly_answered = Answer.get_correctly_answer_identification(@questionnaire).sorted.take(10)
    elsif @questionnaire.q_and_a?
      @questions = Answer.where(questionnaire: @questionnaire).order(created_at: :desc).sort_by { |a| a.pinned ? 0 : 1 }.take(10)
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

  def pinned
    @questionnaire.answered_correctly.update_all(pinned: false)
    answer = Answer.find(params[:answer_id])
    if answer.update(pinned: true)
      redirect_to event_questionnaire_path(event_id: @event, id: @questionnaire.id)
    else
      render :show
    end
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
