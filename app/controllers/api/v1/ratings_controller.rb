class Api::V1::RatingsController < Api::ApplicationController
  before_action -> { set_event params[:event_id] }, only: [:index, :create]
  before_action -> { set_user params[:user_id] }, only: [:index]

  def index
    is_admin = params[:is_admin] == 'true'
    response_json = {}
    response_json[:feed_backs] = []
    feed_back_questions = @event.feed_backs
    if is_admin
      feed_back_questions.each do |question|
        response_json[:feed_backs] << {
                                        feed_back_id: question.id,
                                        question: question.question,
                                        question_type: question.question_type,
                                        guest_list_id: "admin",
                                        answer: "",
                                        options: Rating::RATINGS,
                                        disabled: true
                                      }
      end
    else
      guest = GuestList.invitation(@user, @event)
      if guest.ratings.empty?
        feed_back_questions.each do |question|
          response_json[:feed_backs] << {
                                          feed_back_id: question.id,
                                          question: question.question,
                                          question_type: question.question_type,
                                          guest_list_id: guest.id,
                                          answer: "",
                                          options: Rating::RATINGS,
                                          disabled: guest.has_answered_feed_back
                                        }
        end
      else
        guest.ratings.each do |ratings|
          response_json[:feed_backs] << {
                                          feed_back_id: ratings.feed_back_id,
                                          question: ratings.feed_back.question,
                                          question_type: ratings.feed_back.question_type,
                                          guest_list_id: ratings.guest_list_id,
                                          answer: ratings.answer,
                                          options: Rating::RATINGS,
                                          disabled: guest.has_answered_feed_back
                                        }
        end
      end
    end

    render json: response_json
  end

  def create
    # @ratings = Announcement.new(announcement_params)
    # @announcement.save
    # render json: @announcement
  end

  private

  def announcement_params
    params.require(:announcement).permit(:message, :admin_id, :event_id, :display_annoucement, :on_expo)
  end

  def set_event(id)
    @event = Event.find(id)
  end

  def set_user(id)
    return nil if params[:is_admin] == 'true'
    @user = User.find(id)
  end
end
