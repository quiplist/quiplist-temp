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
                <a type="button" data-bs-toggle="modal" data-bs-target="#feedbackModal" id="feedbackBtn">
                    <img className="zoom feedback" src={Feedback}/>
                </a>

                {/* Start modal for feedback */}
                <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedbackModalLabel">Feedback Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <select className="mb-3 form-select" aria-label="Default select example">
                                    <option defaultValue>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End modal for feedback */}

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
                <a href="#" id="game3tBtn" onClick={() => window.open("http://127.0.0.1:3000/events/facebook/games/fishing_boat", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}>
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
