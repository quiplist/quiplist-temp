# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  layout 'main', only: [:edit, :update]
  before_action :authenticate_user!, only: [:edit, :update]
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  before_action -> { check_event_code params[:event_code] }, only: [:new, :create, :edit, :update]

  # GET /resource/sign_up
  def new
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
         GuestList.create_guest_list(resource, @event)
         set_flash_message! :notice, :signed_up
         sign_up(resource_name, resource)
         respond_with resource, location: after_sign_up_path_for(resource, @event)
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
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)
    resource.reset_password = false
    resource.temporary_password = ""
    resource_updated = update_resource(resource, account_update_params)
    yield resource if block_given?
    if resource_updated
      set_flash_message_for_update(resource, prev_unconfirmed_email)
      bypass_sign_in resource, scope: resource_name if sign_in_after_change_password?

      respond_with resource, location: after_update_path_for(resource, @event)
    else
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource
    end
  end

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
    added_attrs = [:event_code, :email, :password, :password_confirmation, :contact_number,
      :full_name, :member_id, :member_type, :affiliation, :abo_number, :aes_number,
      :company, :id_number, :distributor_number, :employee_number, :mailing_address,
      :member_company, :upline, :who_invited_you?]
    devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs)
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    update_attrs = [:password, :password_confirmation, :current_password]
    devise_parameter_sanitizer.permit :account_update, keys: update_attrs
  end

  # The path used after sign up.
  def after_sign_up_path_for(resource, event)
    #super(resource)
    home_path(event_code: event.event_code)
  end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end

  def after_update_path_for(resource, event)
    flash[:notice] = "Changed Password succesfully"
    home_path(event_code: event.event_code)
  end
end
