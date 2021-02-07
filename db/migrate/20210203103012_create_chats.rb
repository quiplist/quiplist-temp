class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.references :sender, polymorphic: true
      t.belongs_to :event, index: true
      t.string :message
      t.timestamps
    end
  end
end
