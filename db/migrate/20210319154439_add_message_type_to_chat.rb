class AddMessageTypeToChat < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :chat_type, :integer, default: 0
  end
end
