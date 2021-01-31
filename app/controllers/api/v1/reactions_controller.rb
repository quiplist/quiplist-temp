class Api::V1::ReactionsController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token

  def create
    @reaction = Reaction.upsert(reaction_params)
    render json: @reaction, adapter: :json
  end

  def destroy
    @reaction = Reaction.where(reaction_params).destroy_all
    render json: @reaction, adapter: :json
  end

  private

  def reaction_params
    params.require(:reaction).permit(:responder_id, :responder_type, :event_id, :emotion)
  end
end
