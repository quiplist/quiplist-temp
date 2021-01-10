class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :event_code, unique: true
      t.string :title
      t.string :description
      t.date :start_date
      t.date :end_date
      t.datetime :start_time
      t.datetime :end_time
      t.integer :event_type, default: 0
      t.integer :stream_type
      t.string :stream_key
      t.string :stream_video
      t.string :brochure
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
