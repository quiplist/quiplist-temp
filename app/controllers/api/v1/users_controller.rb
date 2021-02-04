class Api::V1::UsersController < Api::ApplicationController

  def fetch_current_user
    render json: @current_user, serializer: UserSerializer
  end
end
