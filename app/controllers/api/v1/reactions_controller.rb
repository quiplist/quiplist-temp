class Api::V1::ReactionsController < Api::ApplicationController

  def create
    @reaction = Reaction.new(reaction_params)
    if @reaction.save
      @chat = Chat.new(sender_id: @reaction.responder_id, sender_type: @reaction.responder_type,
        event_id: @reaction.event_id, message: @reaction.message, chat_type: Chat::REACTION)
      if @chat.save
          puts "successfully saved a chat!"
          EventsChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(@chat).as_json)
      end
    end

    render json: @chat
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
