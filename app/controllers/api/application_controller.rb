class Api::ApplicationController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token
  before_action :set_current_user
  before_action :authenticate!
end
