class Api::V1::UsersController < Api::ApplicationController

  def fetch_current_user
    render json: @current_user, serializer: UserSerializer
  end

  def show
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
