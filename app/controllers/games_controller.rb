class GamesController < ApplicationController
  layout false

  def memory_game
    @event_id = 9
    @user_id = 10
    @guest_list_id = 626
  end

  def sample
    @event_id = 9
    @user_id = 10
    @guest_list_id = 626
  end
end
