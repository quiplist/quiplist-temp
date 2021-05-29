class Api::ApplicationController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token
  before_action :authenticate!

  rescue_from ActionController::ParameterMissing, with: :missing_param_error

  def missing_param_error(exception)
    render status: :unprocessable_entity, json: { error: exception.message }
  end

  def doorkeeper_unauthorized_render_options(error: nil)
    { json: { error: "unauthorized" } }
  end
end
