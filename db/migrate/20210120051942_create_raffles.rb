class CreateRaffles < ActiveRecord::Migration[6.0]
  def change
    create_table :raffles do |t|
      t.belongs_to :event, index: true
      t.belongs_to :guest_list, index: true
      t.integer :raffle_type, default: 0
      t.string :prize
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
