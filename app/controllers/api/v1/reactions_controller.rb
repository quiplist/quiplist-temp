class Api::V1::ReactionsController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token

  def create
    @reaction = Reaction.create(reaction_params)
    render_jsonapi_response @reaction
  end

  def destroy
  end

  private

  def reaction_params
    params.require(:reaction).permit(:responder_id, :responder_type, :event_id, :emotion)
  end
end
