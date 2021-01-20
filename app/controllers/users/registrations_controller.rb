# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  def new
    @event = check_event_code(params[:event_code])
    if @event.nil?
      redirect_to root_path, alert: "Invalid Event Code!"
    elsif @event.queued?
      redirect_to root_path, alert: "Event not yet started!"
    elsif @event.done?
      redirect_to root_path, alert: "Event already done!"
    else
      build_resource
      yield resource if block_given?
      respond_with resource
    end
  end

  # POST /resource
  def create
    @event = check_event_code(params[:event_code])
    if @event.nil?
      redirect_to root_path, alert: "Invalid Event Code!"
    elsif @event.queued?
      redirect_to root_path, alert: "Event not yet started!"
    elsif @event.done?
      redirect_to root_path, alert: "Event already done!"
    else
     build_resource(sign_up_params)

     resource.save
     yield resource if block_given?
     if resource.persisted?
       if resource.active_for_authentication?
         GuestList.create_guest_list(resource, event)
         set_flash_message! :notice, :signed_up
         sign_up(resource_name, resource)
         respond_with resource, location: after_sign_up_path_for(resource, event)
       else
         set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
         expire_data_after_sign_in!
         respond_with resource, location: after_inactive_sign_up_path_for(resource)
       end
     else
       clean_up_passwords resource
       set_minimum_password_length
       respond_with resource
     end
   end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    added_attrs = [:email, :password, :password_confirmation, :contact_number, :birthdate, :full_name, :member_id, :member_type, :affiliation]
    devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs)
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  def after_sign_up_path_for(resource, event)
    #super(resource)
    home_path(event_code: event.event_code)
  end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
