import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Random from "images/random.png";

class RandomPicker extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      currentChoice: {},
      currentEvent: {},
      currentRaffle: {},
      guestLists: []
    };

    this.interval = null;
    this.intervalDuration = 25;
    this.duration = 1000;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.pickChoice = this.pickChoice.bind(this);
    this.setChoice = this.setChoice.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }

  componentDidMount() {
    const fetchEventUrl = `/api/v1/events/${this.props.eventId}`;
    const fetchRaffleUrl = `/api/v1/raffles/${this.props.raffleId}`;
    const fetchGuestListUrl = `/api/v1/guest_lists?event_id=${this.props.eventId}`;

    fetch(fetchEventUrl)
    .then(resp => resp.json())
    .then(result => {
      this.setState({ currentEvent: result })
    });

    fetch(fetchRaffleUrl)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({ currentRaffle: result })
      if(this.state.currentRaffle.status === 2) {
        this.setState({ currentChoice: result.winner})
        Swal.fire({
          title: result.won,
          showCancelButton: false,
          showConfirmButton: false
        })
      }
    });

    fetch(fetchGuestListUrl)
    .then(response => response.json())
    .then(result => {
      this.setState({ guestLists: result })
    });
  }


  start() {
    clearInterval(this.interval);
    var element = document.getElementById("choice");
    // var randomTemplate = document.getElementById("randomTemplate");
    element.classList.remove("winner");
    this.interval = setInterval(this.setChoice, this.intervalDuration);
    this.setState({ isRunning: true });
    setTimeout(() => {
      if (this.state.isRunning) {
        this.stop()
        element.classList.add("winner");
        Swal.fire({
          title: this.state.currentChoice.user.full_name,
          showCancelButton: false,
          showConfirmButton: false
        })
      }
    }, this.duration);
  }

  stop() {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
    var element = document.getElementById("choice");
    element.classList.add("winner");
  }

  pickChoice() {
    const choice = this.state.guestLists[Math.floor(Math.random() * this.state.guestLists.length)];
    return choice;
  }

  setChoice() {
    this.setState({ currentChoice: this.pickChoice() });
  }

  setWinner(winner) {
    const url = `/api/v1/raffles/${this.state.currentRaffle.id}`;
    const body = {
      raffle: {
        guest_list_id: winner.id,
        status: 2
      }
    }

    fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(result => {
      // set to next page
    })
  }


  render() {
    const { isRunning, currentChoice, currentEvent, currentRaffle } = this.state;
    if (this.state.guestLists.length === 0) return null;
    return (
      <div className="RandomPicker">
        <RandomPickerChoice choice={currentChoice} />
        <RandomPickerControls
          currentEvent={currentEvent}
          currentRaffle={currentRaffle}
          isRunning={isRunning}
          hasChoice={currentChoice}
          start={this.start}
          stop={this.stop}
          setWinner={winner => this.setWinner(winner)}
        />
      </div>
    );
  }
}

RandomPicker.propTypes = {
  items: PropTypes.array,
  duration: PropTypes.number
};

class RandomPickerChoice extends React.PureComponent {
  render() {
    const { choice } = this.props;
    const content = (Object.keys(choice).length == 0) ? '' : choice.user.full_name;
    return (
      <div className="RandomPicker__choice px-2">
        <img id="randomTemplate" className="img-fluid" src={Random} alt="template"></img>
        <span id="choice" className="RandomPicker__choiceItem">{content}</span>
      </div>
    );
  }
}

class RandomPickerControls extends React.PureComponent {

  onWinnerMouseOver = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.random_name_winner_mouse_over;
  };

  onWinnerMouseOut = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.random_name_winner_mouse_out;
  };

  onDrawMouseOver = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.random_name_draw_mouse_over;
  };

  onDrawMouseOut = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.random_name_draw_mouse_out;
  };

  render() {
    const {
      isRunning,
      hasChoice,
      start,
      stop,
      setWinner,
      currentEvent,
      currentRaffle
    } = this.props;
    let isDone = (currentRaffle.status === 2)
    return (
      <div className="RandomPicker__controls">
        <button
          className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
          onClick={isRunning ? stop : start}
          style={{ background : currentEvent.random_name_draw_mouse_out, border : '1px solid' + currentEvent.random_name_draw_mouse_out }}
          onMouseEnter={event => this.onDrawMouseOver(event)}
          onMouseOut={event => this.onDrawMouseOut(event)}
          disabled={isDone}
        >
          {isRunning ? 'STOP' : 'DRAW'}
        </button>

        <form
          action="."
          onSubmit={e => {
            e.preventDefault()
            setWinner(hasChoice)
          }}>
          <input
            type="submit" value={'Winner'}
            className="btn"
            style={{ background : currentEvent.random_name_winner_mouse_out, border : '1px solid' + currentEvent.random_name_winner_mouse_out }}
            onMouseEnter={event => this.onWinnerMouseOver(event)}
            onMouseOut={event => this.onWinnerMouseOut(event)}
            disabled={isDone} />
        </form>
      </div>
    );
  }

}

export default RandomPicker
