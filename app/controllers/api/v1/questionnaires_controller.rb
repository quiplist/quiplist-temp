class Api::V1::QuestionnairesController < Api::ApplicationController
  before_action :set_questionnaire

  def update
    @event = @questionnaire.event
    if @questionnaire.update_attributes questionnaire_params
        puts "successfully saved a chat!"
        QuestionnairesChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(@questionnaire).as_json)
    end
    render json: @questionnaire
  end

  private

  def set_questionnaire
    @questionnaire = Questionnaire.find(params[:id])
  end

  def questionnaire_params
    params.require(:questionnaire).permit(:status)
  end
end
