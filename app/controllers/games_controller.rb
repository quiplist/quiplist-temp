class GamesController < ApplicationController
  layout 'no_layout'

  def memory_game
    render file: 'public/games/memory_game/index.html'
  end
end
