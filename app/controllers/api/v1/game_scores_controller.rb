class Api::V1::GameScoresController < Api::ApplicationController

  before_action :doorkeeper_authorize!
  before_action :set_game_score, except: [:index, :create]

  def index
    event_id = params[:event_id] || nil
    game_id = params[:game_id] || nil
    per_page = params[:per_page] || 10
    page = params[:page] || 1
    @game_scores = if game_id.nil? && !event_id.nil?
      GameScore.where(event_id: event_id)
    elsif !game_id.nil? && event_id.nil?
      GameScore.where(game_id: game_id)
    elsif !game_id.nil? && !event_id.nil?
      GameScore.where(game_id: game_id, event_id: event_id)
    else
      GameScore.all
    end
    @game_scores = @game_scores.sorted.page(page).per(per_page)
  
    render json: @game_scores,
           meta: pagination(@game_scores),
           adapter: :json
  end

  def create
    @game_score = GameScore.new(game_score_params)
    if @game_score.save
      render json: @game_score
    else
      render json: { errors: @game_score.errors }, status: 400
    end
  end

  def update
    if @game_score.update_attributes game_score_params
      render json: @game_score
    else
      render json: { errors: @game_score.errors }, status: 400
    end
  end

  def show
    render json: @game_score
  end

  private

  def set_game_score
    @game_score = GameScore.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.to_s }, status: :not_found
  end

  def game_score_params
    params.require(:game_score).permit(:score, :game_id, :guest_list_id, :event_id)
  end
end
