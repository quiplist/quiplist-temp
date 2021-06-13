class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.belongs_to :user, index: true
      t.belongs_to :feed_back, index: true
      t.string :answer
      t.timestamps
    end
  end
end
