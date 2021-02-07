class ErrorsController < ApplicationController
  layout 'admin', only: [:unauthorized]
  #layout 'raffle', only: [:draw_raffles]

  before_action :set_current_user
  before_action :authenticate!

  def show
  end

  def unauthorized
  end
end
