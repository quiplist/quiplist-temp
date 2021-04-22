class ChangeGuestListToUserAnswer < ActiveRecord::Migration[6.0]
  def change
    remove_reference :answers, :guest_list, index: true
    add_reference :answers, :user, index: true
  end
end
