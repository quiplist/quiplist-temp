class HomeController < ApplicationController
  layout 'main', except: [:expo]
  before_action :authenticate_user!, except: [:welcome, :find_event, :forgot_password, :reset_password, :about_us, :contact_us]
  before_action :fetch_reaction, except: [:welcome, :find_event, :profile, :update_profile, :forgot_password, :reset_password, :about_us, :contact_us, :expo]
  before_action -> { check_event_code params[:event_code] }, except: [:welcome, :forgot_password, :reset_password, :about_us, :contact_us]

  def index
    render_404 if @event.nil?

    GuestList.create_guest_list(current_user, @event)
    @guest = GuestList.invitation(current_user, @event)
    if @guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    elsif @guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def thank_you
    render_404 if @event.nil?

    @guest = GuestList.invitation(current_user, @event)
    if @guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif @guest.denied?
      redirect_to denied_path(event_code: @event.event_code)
    end
  end

  def denied
    render_404 if @event.nil?

    @guest = GuestList.invitation(current_user, @event)
    if @guest.approved?
      redirect_to home_path(event_code: @event.event_code)
    elsif @guest.pending?
      redirect_to thank_you_path(event_code: @event.event_code)
    end
  end

  def welcome
    render layout: "application"
  end

  def find_event
    if @event.nil?
      flash.now[:alert] = 'Invalid Event Code!'
      render :welcome, layout: "application"
    elsif @event.queued?
      flash.now[:alert] = 'Event not yet started!'
      render :welcome, layout: "application"
    elsif @event.done?
      flash.now[:alert] = 'Event already done!'
      render :welcome, layout: "application"
    elsif current_user.nil?
      redirect_to new_user_registration_path(event_code: @event.event_code)
    else
      if @event.has_expo?
        redirect_to expo_path(event_code: @event.event_code)
      else
        redirect_to home_path(event_code: @event.event_code)
      end
    end
  end

  def profile
    @user = @current_user
  end

  def update_profile
    @user = @current_user
    if @user.update_attributes user_params
      redirect_to profile_path(event_code: @event.event_code), notice: "Profile updated successfully!"
    else
      render :profile
    end
  end

  def forgot_password
    @user = User.new
    render layout: "application"
  end

  def reset_password
    @user = User.find_by(email: params[:user][:email])
    if @user.nil?
      @user = User.new
      flash.now[:alert] = 'Invalid email'
      render :forgot_password, layout: "application"
    else
      @user = @user.generate_temporary_password
      if @user.save
        redirect_to root_path, notice: "#{@user.full_name} reset password successfully!"
      else
        @user = User.new
        render :forgot_password, layout: "application"
      end
    end
  end

  def about_us
    render layout: "application"
  end

  def contact_us
    render layout: "application"
  end

  def expo
    @guest = GuestList.invitation(current_user, @event)
    render layout: "expo"
  end

  private

  def user_params
    added_attrs = [:email, :password, :password_confirmation, :contact_number,
      :full_name, :member_id, :member_type, :affiliation, :abo_number, :aes_number,
      :company, :id_number, :distributor_number, :employee_number, :mailing_address,
      :member_company, :upline, :who_invited_you?]
    params.require(:user).permit(added_attrs)
  end

  def fetch_reaction
    @reaction = current_user.reactions.first || current_user.reactions.new
  end

end
