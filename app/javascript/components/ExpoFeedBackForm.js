import React  from 'react';
import PropTypes from "prop-types";
import ExpoFeedBackQuestions from './ExpoFeedBackQuestions'

class ExpoFeedBackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedBackAnswers: [],
      hasAnswered: this.props.ratings.has_answered
    };
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
    this.setState(state => ({ feedBackAnswers: [...state.feedBackAnswers, answer] }))
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
              <div className="modal-body">
                  <form
                  onSubmit={e => {
                    e.preventDefault()
                    this.state.submitFeedBack(this.state.feedBackAnswers)
                    this.setState({ hasAnswered: true })
                  }}>
                  {this.props.ratings.feed_backs.map((rating, index) =>
                    <ExpoFeedBackQuestions
                      key = {index}
                      rating = {rating}
                      addFeedBackAnswers = {answer => this.addFeedBackAnswers(answer)}
                    />
                  )}

                  </form>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" disabled={this.state.hasAnswered}>Save changes</button>
              </div>
              </div>
          </div>
      </div>
    )
  }
}


export default ExpoFeedBackForm
