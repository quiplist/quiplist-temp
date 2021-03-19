class Api::V1::ReactionsController < Api::ApplicationController

  def create
    @reaction = Reaction.new(reaction_params)
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
