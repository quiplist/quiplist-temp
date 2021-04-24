class Api::ApplicationController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token
  before_action :authenticate!
end
