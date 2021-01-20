# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    @event = check_event_code(params[:event_code])
    if @event.nil?
      redirect_to root_path, alert: "Invalid Event Code!"
    elsif @event.queued?
      redirect_to root_path, alert: "Event not yet started!"
    elsif @event.done?
      redirect_to root_path, alert: "Event already done!"
    else
      self.resource = resource_class.new(sign_in_params)
      clean_up_passwords(resource)
      yield resource if block_given?
      respond_with(resource, serialize_options(resource))
    end
  end

  # POST /resource/sign_in
  def create
    @event = check_event_code(params[:event_code])
    if @event.nil?
      redirect_to root_path, alert: "Invalid Event Code!"
    elsif @event.queued?
      redirect_to root_path, alert: "Event not yet started!"
    elsif @event.done?
      redirect_to root_path, alert: "Event already done!"
    else
      self.resource = warden.authenticate!(auth_options)
      GuestList.create_guest_list(resource, @event)
      set_flash_message!(:notice, :signed_in)
      sign_in(resource_name, resource)
      yield resource if block_given?
      respond_with resource, location: after_sign_in_path_for(resource, @event)
    end

  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end
end
