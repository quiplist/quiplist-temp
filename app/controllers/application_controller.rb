class ApplicationController < ActionController::Base
  include ApplicationHelper
  before_action :set_current_user
  # DeviseController.respond_to :html, :json
  # rescue_from ActiveRecord::RecordNotFound do |exception|
  #   respond_to do |format|
  #     format.json { head :forbidden, content_type: 'text/html' }
  #     format.html { redirect_to unauthorized_path, alert: exception.message }
  #     format.js   { head :forbidden, content_type: 'text/html' }
  #   end
  # end
  #
  # rescue_from ActionController::RoutingError do |exception|
  #   respond_to do |format|
  #     format.json { head :forbidden, content_type: 'text/html' }
  #     format.html { redirect_to unauthorized_path, alert: exception.message }
  #     format.js   { head :forbidden, content_type: 'text/html' }
  #   end
  # end
  # rescue_from ActionController::RoutingError, with: :render_404

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden, content_type: 'text/html' }
      format.html { redirect_to unauthorized_path }
      format.js   { head :forbidden, content_type: 'text/html' }
    end
  end

  def after_sign_in_path_for(resource, event=nil)
    if (resource.super_admin? || resource.admin?) && event.nil?
      events_path
    elsif !event.nil? && resource.client?
      if event.has_expo?
        expo_path(event_code: event.event_code)
      else
        home_path(event_code: event.event_code)
      end
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

  def authenticate!
    if @current_user == current_admin
      :authenticate_admin!
    elsif @current_user == current_user
      :authenticate_user!
    end
  end

  def set_current_user
    @current_user = current_user || current_admin
  end

  # def current_resource_owner
  #   Admin.find(doorkeeper_token.application.owner_id) if doorkeeper_token
  # end
  #
  # def current_admin
  #   current_resource_owner
  # end

  private

  def pagination(object)
    if object.empty?
      return {
        current_page: 0,
        next_page: 0,
        prev_page: 0,
        total_pages: 0,
        total_count: 0
      }
    end
    {
      current_page: object.current_page,
      next_page: object.next_page,
      prev_page: object.prev_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }
  end

  def current_ability
    @current_ability ||= current_admin ? Ability.new(current_admin) : Ability.new(current_user)
  end

  protected

  def check_event_code(event_code)
    @event = Event.find_by(event_code: event_code)
  end
end
