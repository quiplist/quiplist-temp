import React  from 'react';
import PropTypes from "prop-types";
import ExpoFeedBackQuestions from './ExpoFeedBackQuestions'
import ExpoFeedBackQuestionsRatings from './ExpoFeedBackQuestionsRatings';
import ExpoFeedBackQuestionsInput from './ExpoFeedBackQuestionsInput';



class ExpoFeedBackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedBackAnswers: [],
      hasAnswered: this.props.ratings.has_answered
    };
  }

  createUI() {
     return this.state.ratings.feed_backs.map((fb, i) =>
         <div key={i}>
    	    <input type="text" value={fb||''} onChange={this.handleChange.bind(this, i)} />
         </div>
     )
  }

  submitFeedBack = feedBackAnswers => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = "/api/v1/chats";
    console.log(feedBackAnswers)
    // const body = {
    //   chat: {
    //     sender_id: this.props.currentUser.id,
    //     sender_type: this.props.currentUser.user_type,
    //     message: messageString,
    //     event_id: this.props.currentEvent.id
    //   }
    // }



    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },
    //     body: JSON.stringify(body)
    // })
    // .then(resp => resp.json())
    // .then(result => {
    //   //this.addChat(result)
    //   this.props.chatCable.send({result})
    // })
  }

  addFeedBackAnswers = answer => {
    this.setState((prevState) => ({
      feedBackAnswers: [...prevState.feedBackAnswers, answer]
    }));
  }

  handleChange = (e, guestListId, feedBackId) => {
    console.log(e.target.name)
    if (["answer"].includes(e.target.name)) {
      let answers = [...this.state.feedBackAnswers]
      answers[e.target.dataset.id][e.target.name] = e.target.value
      answers[e.target.dataset.id]["guest_list_id"] = guestListId
      answers[e.target.dataset.id]["feed_back_id"] = feedBackId
      this.setState({ answers })
    } else {
      this.state({ [e.target.name]:e.target.value })
    }
  }

  render() {
    return (
      <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="feedbackModalLabel">Feedback Form</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={e => {
                e.preventDefault()
                this.submitFeedBack(this.state.feedBackAnswers)
                this.setState({ hasAnswered: true })
              }}>
                <div className="modal-body">
                  {this.props.ratings.feed_backs.map((rating, index) => {
                    let ratingId = `rating-${index}`
                    let formInput;
                    if (rating.question_type === 0) {
                      formInput = <ExpoFeedBackQuestionsRatings
                        ratingId = {ratingId}
                        question = {rating.question}
                        disabled = {rating.disabled}
                        answer = {rating.answer}
                        options = {rating.options}
                        guestListId = {rating.guest_list_id}
                        feedBackId = {rating.feed_back_id}
                        i = {index}
                        handleChange = {(e, guestListId, feedBackId) => this.handleChange(e, guestListId, feedBackId)}
                      />

                    } else {
                      formInput = <ExpoFeedBackQuestionsInput
                        ratingId = {ratingId}
                        question = {rating.question}
                        disabled = {rating.disabled}
                        answer = {rating.answer}
                        guestListId = {rating.guest_list_id}
                        feedBackId = {rating.feed_back_id}
                        i = {index}
                        handleChange = {(e, guestListId, feedBackId) => this.handleChange(e, guestListId, feedBackId)}
                      />
                    }
                    return (
                      <div key={index} className="mb-3">
                        {formInput}
                      </div>
                    )

                  })
                }

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <input
                      type="Submit" value={'Send'}
                      className="btn btn-primary"
                      disabled={this.state.hasAnswered}
                    />
                </div>
              </form>
              </div>
          </div>
      </div>
    )
  }
}


export default ExpoFeedBackForm