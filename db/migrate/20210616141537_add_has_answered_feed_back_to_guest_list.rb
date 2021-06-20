class AddHasAnsweredFeedBackToGuestList < ActiveRecord::Migration[6.0]
  def change
    add_column :guest_lists, :has_answered_feed_back, :boolean, default: false
    remove_reference :ratings, :user, index: true
    add_reference :ratings, :guest_list, index: true
  end
end
