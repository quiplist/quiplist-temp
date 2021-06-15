class Api::V1::AnswersController < Api::ApplicationController

  #load_and_authorize_resource :event

  def create
    @answer = Answer.new(answer_params)
    @answer.save

    render json: @answer
  end

  private

  def answer_params
    params.require(:answer).permit(:answer, :questionnaire_id, :user_id, :pinned)
  end
end
