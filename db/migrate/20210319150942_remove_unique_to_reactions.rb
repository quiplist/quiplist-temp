class RemoveUniqueToReactions < ActiveRecord::Migration[6.0]
  def change
    remove_index :reactions, [:event_id, :responder_id, :responder_type]
  end
end
