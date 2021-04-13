import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Random from "images/random.png";

class RandomPicker extends React.PureComponent {
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
    var element = document.getElementById("choice");
    // var randomTemplate = document.getElementById("randomTemplate");
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
  
  reset() {
    var element = document.getElementById("choice");
    element.classList.remove("winner");
    clearInterval(this.interval);
    this.setState({ isRunning: false, currentChoice: '' });
  }
  
  pickChoice() {
    const namesList = [
      'Marcelo Marcelo Marcelo',  
      'Lizzette B. Marcelo',  
      'Pauline B. Marcelo',  
      'Fumiko B. Marcelo',  
      'Tomasa B. Marcelo',  
      'Bertha B. Marcelo',  
      'Antoinette B. Antoinette',  
      'Gavin Christopher Lim Lee',  
      'Rey Christopher Dazo Lee',  
      'Victorina B. Marcelo',  
      'Marlon B. Marcelo',  
      'Christine Marie Dazo Lee',  
      'Arletha Dazo Marcelo',  
      'Ellyn S. Marcelo',  
      'Karol B. Marcelo',  
      'Corrin C. Marcelo', 
      'Josephine D. Marcelo',
    ];
    const choice = namesList[Math.floor(Math.random() * namesList.length)];
    return choice;
  }
  
  setChoice() {
    this.setState({ currentChoice: this.pickChoice() })
  }

  
  render() {
    const { isRunning, currentChoice } = this.state;
    
    return (
      <div className="RandomPicker">
        <RandomPickerChoice choice={currentChoice} />
        <RandomPickerControls 
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

RandomPicker.propTypes = {
  items: PropTypes.array,
  duration: PropTypes.number
};

class RandomPickerChoice extends React.PureComponent {
  render() {
    const { choice } = this.props;
    const content = choice.trim().length > 0 ? choice : '';
    
    return (
      <div className="RandomPicker__choice px-2">
        <img id="randomTemplate" className="img-fluid" src={Random} alt="template"></img>
        <span id="choice" className="RandomPicker__choiceItem">{content}</span>
      </div>  
    );
  }
}

RandomPickerChoice.propTypes = {
  choice: PropTypes.string
};

class RandomPickerControls extends React.PureComponent {
  render() {
    const { 
      isRunning, 
      hasChoice, 
      start, 
      stop, 
      reset 
    } = this.props;
    
    return (
      <div className="RandomPicker__controls">
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

RandomPickerControls.propTypes = {
  isRunning: PropTypes.bool,
  hasChoice: PropTypes.bool,
  start: PropTypes.func,
  stop: PropTypes.func,
  reset: PropTypes.func,
};

export default RandomPicker