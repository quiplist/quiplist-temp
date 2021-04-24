import React from 'react';
import Swal from 'sweetalert2';
//import WheelComponent from 'react-wheel-of-prizes'
import WheelComponent from './WheelComponent';
import 'react-wheel-of-prizes/dist/index.css';

class Wheel extends React.Component {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      currentChoice: {},
      currentEvent: {},
      currentRaffle: {},
      guestLists: [],
      segColors: ["#EE5C36"],
    };

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

    fetch(fetchGuestListUrl)
    .then(response => response.json())
    .then(result => {
      this.setState({ guestLists: result })
    });

    fetch(fetchRaffleUrl)
    .then(response => response.json())
    .then(result => {
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
  }

  onFinished = (winner) => {
    let guestLists = this.state.guestLists;
    let totalGuestList = (guestLists.length);

    if (totalGuestList > 1) {
      Swal.fire({
        title: winner.user.full_name,
        showCancelButton: false,
        showConfirmButton: false
      })
      var index = guestLists.indexOf(winner);
      guestLists.splice(index, 1);

    } else{
      Swal.fire({
        title: winner.user.full_name,
        showCancelButton: false,
        showConfirmButton: false
      })
    }
    this.setChoice(winner)
  }

  pickChoice = () => {
    const choice = this.state.guestLists[Math.floor(Math.random() * this.state.guestLists.length)];
    return choice
  }

  setChoice = (choice) => {
    this.setState(state => ({ currentChoice: choice }));
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

  onWinnerMouseOver = event => {
    const el = event.target;
    el.style.background = this.state.currentEvent.random_number_winner_mouse_over;
  };

  onWinnerMouseOut = event => {
    const el = event.target;
    el.style.background = this.state.currentEvent.random_number_winner_mouse_out;
  };

  onDrawMouseOver = event => {
    const el = event.target;
    el.style.background = this.state.currentEvent.random_number_draw_mouse_over;
  };

  onDrawMouseOut = event => {
    const el = event.target;
    el.style.background = this.state.currentEvent.random_number_draw_mouse_out;
  };


  render() {
    if (this.state.guestLists.length === 0) return null;
    let choice = this.pickChoice();
    let isDone = (this.state.currentRaffle.status === 2)
    let isDisabled = (Object.keys(this.state.currentChoice).length === 0
                  && this.state.currentChoice.constructor === Object)

    return (
      <div className="wheel-wrapper" id="canvas-container">
      <WheelComponent
        segments = {this.state.guestLists}
        segColors = {this.state.segColors}
        winningSegment = {choice}
        onFinished={ (winner) => this.onFinished(winner) }
        isDone={isDone}
        isDisabled={isDisabled}
        isRunning={this.state.isRunning}
        primaryColor='#BBBBBC'
        contrastColor='white'
        buttonText='Draw'
        isOnlyOnce = {false}
        size={290}
        onDrawMouseOver={ (event) => this.onDrawMouseOver(event) }
        onDrawMouseOut={ (event) => this.onDrawMouseOut(event) }
        onWinnerMouseOver={ (event) => this.onWinnerMouseOver(event) }
        onWinnerMouseOut={ (event) => this.onWinnerMouseOut(event) }
        currentEvent={this.state.currentEvent}
        setWinner={winner => this.setWinner(winner)}
        currentChoice={this.state.currentChoice} />
      </div>
    )
  }

}

export default Wheel;
