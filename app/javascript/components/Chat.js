import PropTypes from "prop-types"
// import ActionCable from 'actioncable';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import React from 'react'
import ReactDOM from 'react-dom'
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //currentUser: {},
      // currentEvent: {},
      //currentEvent: this.props.currentEvent,
      //chats: []
      //chats: this.props.chats,
    }
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom = () => {
      const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  componentDidUpdate() {
      this.scrollToBottom();
  }

  componentDidMount() {

    this.scrollToBottom();
    // this.cable = ActionCable.createConsumer('/cable');

    // fetch('/api/v1/fetch_current_user')
    // .then(response => response.json())
    // .then(result => {
    //   this.setState({ currentUser: result })
    // });

    // const fetchEventUrl = `/api/v1/events/${this.props.eventId}`;
    // fetch(fetchEventUrl)
    // .then(resp => resp.json())
    // .then(result => {
    //   this.setState({ currentEvent: result })
    //   this.setState({ chats: result.chats })
    // });
    //
    // this.eventsChannel = this.cable.subscriptions.create(
    //   {
    //     channel: `EventsChannel`,
    //     id: this.props.eventId
    //   },{
    //     connected: () => {
    //       console.log("connected!")
    //     },
    //     disconnected: () => {},
    //     received: data => {
    //       this.props.addChat(data.result)
    //     }
    //   });
  }

  // addChat = chat => {
  //   this.setState(state => ({ chats: [...state.chats, chat] }))
  // }


  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = "/api/v1/chats";
    const body = {
      chat: {
        sender_id: this.props.currentUser.id,
        sender_type: this.props.currentUser.user_type,
        message: messageString,
        event_id: this.props.currentEvent.id
      }
    }



    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(result => {
      //this.addChat(result)
      this.props.chatCable.send({result})
    })
  }


  render () {
    return (
      <React.Fragment>
        <div className="chat-container">
          <div className="chat-wrapper" ref={(el) => { this.messagesContainer = el; }} >
            {this.props.chats.map((chat, index) =>
              <ChatMessage
                key={index}
                chat={chat}
                currentUser={this.props.currentUser}
              />,
            )}
          </div>
          <ChatInput
            onSubmitMessage={messageString => this.submitMessage(messageString)}
            mouseOut={this.props.currentEvent.main_mouse_out}
            mouseOver={this.props.currentEvent.main_mouse_over}
          />
        </div>
      </React.Fragment>
    );
  }
}

// Chat.propTypes = {
//   eventId: PropTypes.number.isRequired,
//   addChat: PropTypes.func.isRequired,
//   chats: PropTypes.array.isRequired
// };

export default Chat
