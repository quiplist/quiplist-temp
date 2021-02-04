class Api::V1::ChatsController < Api::ApplicationController
  before_action -> { check_event_code params[:event_code] }, only: [:index, :create]

  def index
    @chats = @event.chats
    render json: @chats
  end

  def create
    @chat = Chat.new(message_params)
    if @chat.save
        puts "successfully saved a chat!"
        EventsChannel.broadcast_to(@event, ActiveModelSerializers::SerializableResource.new(@chat).as_json)
    end
    render json: @chat
  end

  private

  def message_params
    params.require(:chat).permit(:message, :sender_id, :sender_type, :event_id)
  end
end
