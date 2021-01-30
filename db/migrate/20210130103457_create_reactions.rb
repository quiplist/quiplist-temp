class CreateReactions < ActiveRecord::Migration[6.0]
  def change
    create_table :reactions do |t|
      t.belongs_to :event, index: true
      t.references :responder, polymorphic: true
      t.integer :emotion, default: 0
      t.timestamps
    end
  end
end
