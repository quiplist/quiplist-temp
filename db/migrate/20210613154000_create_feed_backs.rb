class CreateFeedBacks < ActiveRecord::Migration[6.0]
  def change
    create_table :feed_backs do |t|
      t.belongs_to :event, index: true
      t.string :question
      t.integer :question_type, default: 0
      t.timestamps
    end
  end
end
