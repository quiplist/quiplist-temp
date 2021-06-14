import React  from 'react';
import Bora from "images/bora.png";
import MainProgram from "images/main_program copy.png";
import Diamond from "images/diamond copy.png";
import Feedback from "images/feedback copy.png";
import Als from "images/als copy.png";
import Coreplus from "images/coreplus copy.png";
import Aniv from "images/aniv copy.png";
import Standin from "images/standin.jpg";
import Island from "images/island.png";
import Sales from "images/sales.png";
import Fruit from "images/fruit.png";
import Pin from "images/standin.png";
import Bonanza from "images/bonanza.png";
import Power from "images/power.png";
import Header from "images/header.png";

class ExpoMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg">
        <div className="cntr">

            <img className="hdr" src={Header}/>
            {/* <img className="island" src={Island}/> */}
            <div className="island">

                <a href="#"  target="_blank"  id="platinumBtn">
                    <img className="zoom bora" src={Bora}/>
                </a>
                <a href="#" id="programBtn">
                    <img className="zoom mProgram" src={MainProgram}/>
                </a>
                <a href="#" target="_blank" id="diamondBtn">
                    <img className="zoom diamond" src={Diamond}/>
                </a>
                <a href="#" id="feedbackBtn">
                    <img className="zoom feedback" src={Feedback}/>
                </a>
                <a href="#" target="_blank" id="alsBtn">
                    <img className="zoom als" src={Als}/>
                </a>
                <a href="games/als-game_001.html" target="_blank"  id="salesBtn">
                    <img className="zoom sales" src={Sales}/>
                </a>
                <a href="games/als-game_002.html" target="_blank"  id="fruitBtn">
                    <img className="zoom fruit" src={Fruit}/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid1tBtn">
                    <img className="zoom corVid1" src={Pin} alt="corVid1" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid2tBtn">
                    <img className="zoom corVid2" src={Pin} alt="corVid2"/>
                </a>
                <a href="games/coreplus-game_001.html" target="_blank" id="bonanzaBtn">
                    <img className="zoom bonanza" src={Bonanza}/>
                </a>
                <a href="games/coreplus-game_002.html" target="_blank" id="powertBtn">
                    <img className="zoom power" src={Power}/>
                </a>
                <a href="games/coreplus-game_003.html" target="_blank" id="game3tBtn">
                    <img className="zoom game3" src={Power}/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="alsVid1tBtn">
                    <img className="zoom alsVid1" src={Pin} alt="alsVid1"/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="alsVid2tBtn">
                    <img className="zoom alsVid2" src={Pin} alt="alsVid2"/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="alsVid3tBtn">
                    <img className="zoom alsVid3" src={Pin} alt="alsVid3"/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="alsVid4tBtn">
                    <img className="zoom alsVid4" src={Pin} alt="alsVid4"/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="alsVid5tBtn">
                    <img className="zoom alsVid5" src={Pin} alt="alsVid5"/>
                </a>


                <a href="#" target="_blank" id="corBtn">
                    <img className="zoom cor" src={Coreplus}/>
                </a>
                <a href="#" target="_blank" id="anivBtn">
                    <img className="zoom aniv" src={Aniv}/>
                </a>
            </div>



        </div>
      </div>
    )
  }
}

export default ExpoMap
