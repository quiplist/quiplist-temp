require 'doorkeeper/orm/active_record/application'

module Doorkeeper
  class ApplicationsController < Doorkeeper::ApplicationController
    layout "admin" unless Doorkeeper.configuration.api_only

    before_action :authenticate_admin!
    before_action :set_current_user
    authorize_resource
    before_action :set_application, only: %i[show edit update destroy]

    def index
      @applications = @current_user.oauth_applications

      respond_to do |format|
        format.html
        format.json { head :no_content }
      end
    end

    def show
      respond_to do |format|
        format.html
        format.json { render json: @application, as_owner: true }
      end
    end

    def new
      @application = Doorkeeper.config.application_model.new
    end

    def create
      @application = Doorkeeper.config.application_model.new(application_params)
      @application.owner = @current_user if Doorkeeper.configuration.confirm_application_owner?
      if @application.save
        flash[:notice] = I18n.t(:notice, scope: %i[doorkeeper flash applications create])
        flash[:application_secret] = @application.plaintext_secret

        respond_to do |format|
          format.html { redirect_to oauth_application_url(@application) }
          format.json { render json: @application, as_owner: true }
        end
      else
        respond_to do |format|
          format.html { render :new }
          format.json do
            errors = @application.errors.full_messages

            render json: { errors: errors }, status: :unprocessable_entity
          end
        end
      end
    end

    def edit; end

    def update
      if @application.update(application_params)
        flash[:notice] = I18n.t(:notice, scope: i18n_scope(:update))

        respond_to do |format|
          format.html { redirect_to oauth_application_url(@application) }
          format.json { render json: @application, as_owner: true }
        end
      else
        respond_to do |format|
          format.html { render :edit }
          format.json do
            errors = @application.errors.full_messages

            render json: { errors: errors }, status: :unprocessable_entity
          end
        end
      end
    end

    def destroy
      flash[:notice] = I18n.t(:notice, scope: i18n_scope(:destroy)) if @application.destroy

      respond_to do |format|
        format.html { redirect_to oauth_applications_url }
        format.json { head :no_content }
      end
    end

    private

    def set_application
      @application = @current_user.oauth_applications.find(params[:id])
    end

    def application_params
      params.require(:doorkeeper_application)
        .permit(:name, :redirect_uri, :confidential)
    end

    def i18n_scope(action)
      %i[doorkeeper flash applications] << action
    end

    def set_current_user
      @current_user = current_admin
    end
  end
end
