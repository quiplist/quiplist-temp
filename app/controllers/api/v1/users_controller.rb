class Api::V1::UsersController < Api::ApplicationController

  before_action :set_user, only: [:show]

  def fetch_current_user
    render json: @current_user, serializer: UserSerializer
  end

  def show
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.to_s }, status: :not_found
  end
end
