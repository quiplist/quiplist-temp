class Api::V1::ReactionsController < Api::ApplicationController

  def create
    @reaction = Reaction.find_or_initialize_by(responder_id: reaction_params[:responder_id], responder_type: reaction_params[:responder_type], event_id: reaction_params[:event_id])
    @reaction.emotion = reaction_params[:emotion]
    @reaction.save
    render json: @reaction, adapter: :json
  end

  def destroy
    @reaction = Reaction.where(reaction_params).destroy_all
    head :no_content
  end

  private

  def reaction_params
    params.require(:reaction).permit(:responder_id, :responder_type, :event_id, :emotion)
  end
end
