class CreateGuestLists < ActiveRecord::Migration[6.0]
  def change
    create_table :guest_lists do |t|
      t.references :approver
      t.belongs_to :user, index: true
      t.belongs_to :event, index: true
      t.integer :status, default: 0
      t.integer :raffle_number
      t.integer :raffle_status, default: 0
      t.timestamps
    end
  end
end
