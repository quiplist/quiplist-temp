class ApplicationController < ActionController::Base

  def after_sign_in_path_for(resource, event=nil)
    if (resource.super_admin? || resource.admin?) && event.nil?
      events_path
    elsif !event.nil? && resource.client?
      home_path(event_code: event.event_code)
    else
      root_path
    end
  end

  def render_404
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404", layout: false, status: :not_found }
      format.xml  { head :not_found }
      format.any  { head :not_found }
    end
  end

  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render json: resource, adapter: :json
    else
      render json: { error: resource.errors }, status: 400
    end
  end

  protected

  def check_event_code(event_code)
    @event = Event.find_by(event_code: event_code)
  end
end
