import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  onMouseOver = event => {
    const el = event.target;
    el.style.background = this.props.mouseOver;
  };

  onMouseOut = event => {
    const el = event.target;
    el.style.background = this.props.mouseOut;
  };

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}>
        <div className="chat-input">
              <input
                type="text"
                placeholder={'Enter message...'}
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
                 />
              <input
                type="submit" value={'Send'}
                style={{ background : this.props.mouseOut, border : '1px solid' + this.props.mouseOut }}
                onMouseEnter={event => this.onMouseOver(event)}
                onMouseOut={event => this.onMouseOut(event)} />
        </div>
      </form>
    )
  }
}

export default ChatInput
