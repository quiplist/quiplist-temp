import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import FirstNumber from "images/firstnumber.png";
import RandomNum from "images/random_num_temp.png";
import LastNumber from "images/fourthnumber.png";
class RandomNumber extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      currentChoice: ''
    };

    this.interval = null;
    this.intervalDuration = 25;
    this.duration = 1000;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.pickChoice = this.pickChoice.bind(this);
    this.setChoice = this.setChoice.bind(this);
  }

  start() {
    clearInterval(this.interval);
    var element = document.getElementById("choiceNumber");
    element.classList.remove("winner");
    this.interval = setInterval(this.setChoice, this.intervalDuration);
    this.setState({ isRunning: true });
    setTimeout(() => {
      if (this.state.isRunning) {
        this.stop()
        element.classList.add("winner");
        console.log(this.state.currentChoice);
        Swal.fire({
          title: this.state.currentChoice,
          showCancelButton: true,
          showConfirmButton: true
        })
      }
    }, this.duration);
  }

  stop() {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
    var element = document.getElementById("choiceNumber");
    element.classList.add("winner");
  }

  reset() {
    var element = document.getElementById("choiceNumber");
    element.classList.remove("winner");
    clearInterval(this.interval);
    this.setState({ isRunning: false, currentChoice: '' });
  }

  pickChoice() {
    const choice = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    return choice;
  }

  setChoice() {
    this.setState({ currentChoice: this.pickChoice() })
  }


  render() {
    const { isRunning, currentChoice } = this.state;

    return (
      <div className="RandomPicker">
        <RandomNumberChoice choice={currentChoice} />
        <RandomNumberControls
          isRunning={isRunning}
          hasChoice={currentChoice.trim().length > 0}
          start={this.start}
          stop={this.stop}
          reset={this.reset}
        />
      </div>
    );
  }
}

RandomNumber.propTypes = {
  items: PropTypes.array,
  duration: PropTypes.number
};

class RandomNumberChoice extends React.PureComponent {
  render() {
    const { choice } = this.props;
    const content = choice.trim().length > 0 ? choice : '';

    if(content){
      var str = content.toString();
      var result1 = str.substring(0,1)
      result1 = parseInt(result1);
      var result2 = str.substring(1,2)
      result2 = parseInt(result2);
      var result3 = str.substring(2,3)
      result3 = parseInt(result3);
      var result4 = str.substring(3,4)
      result4 = parseInt(result4);
    }

    return (
      <div className="RandomNumberPicker__choice px-2">
        <div className="numberWrapper">
            <img id="randomTemplate" className="img-fluid" src={FirstNumber} alt="first number"></img>
            <span id="choiceNumber" className="RandomPicker__choiceItem">{result1}</span>
        </div>
        <div className="numberWrapper">
            <img id="randomTemplate" className="img-fluid" src={RandomNum} alt="random number"></img>
            <span id="choiceNumber" className="RandomPicker__choiceItem">{result2}</span>
        </div>
        <div className="numberWrapper">
            <img id="randomTemplate" className="img-fluid" src={RandomNum} alt="random number"></img>
            <span id="choiceNumber" className="RandomPicker__choiceItem">{result3}</span>
        </div>
        <div className="numberWrapper">
            <img id="randomTemplate" className="img-fluid" src={LastNumber} alt="lastnumber"></img>
            <span id="choiceNumber" className="RandomPicker__choiceItem">{result4}</span>
        </div>
      </div>
    );
  }
}

RandomNumberChoice.propTypes = {
  choice: PropTypes.string
};

class RandomNumberControls extends React.PureComponent {
  render() {
    const {
      isRunning,
      hasChoice,
      start,
      stop,
      reset
    } = this.props;

    return (
      <div className="RandomNumber__controls">
        <button
          className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
          onClick={isRunning ? stop : start}
        >
          {isRunning ? 'stop' : 'start'}
        </button>
        <button
          disabled={isRunning || !hasChoice}
          className="RandomPicker__button RandomPicker__button--reset"
          onClick={reset}
        >
          reset
        </button>
      </div>
    );
  }

}

RandomNumberControls.propTypes = {
  isRunning: PropTypes.bool,
  hasChoice: PropTypes.bool,
  start: PropTypes.func,
  stop: PropTypes.func,
  reset: PropTypes.func,
};

export default RandomNumber
