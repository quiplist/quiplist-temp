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
import ExpoFeedBackForm from './ExpoFeedBackForm'

class ExpoMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let memoryGameUrl = `/events/${this.props.currentEvent.event_code}/games/memory_game`;
    let fishingBoatUrl = `/events/${this.props.currentEvent.event_code}/games/fishing_boat`;
    let powerTowerUrl = `https://ignitrondigital.com/qp/power-game?event_id=${this.props.currentEvent.id}&guest_list_id=${this.props.guestListId}`;
    let fruitFallUrl = `https://ignitrondigital.com/qp/fruit-fall-game?event_id=${this.props.currentEvent.id}&guest_list_id=${this.props.guestListId}`;
    let mainProgramUrl, mainProgram;
    let onClickMemoryGame, onClickFishingBoat, onClickPowerTower, onClickFruitFall;
    let disabledGames = (this.props.currentEvent.disable_expo_games || this.props.isAdmin);
    let disabledMainEvent = this.props.currentEvent.disable_main_event;
    if (disabledMainEvent) {
      mainProgram = <a href="#" id="programBtn">
          <img className="zoom mProgram" src={MainProgram}/>
      </a>
    } else {
      if (this.props.isAdmin) {
        mainProgramUrl = `/admins/events/${this.props.currentEvent.id}/launch`;
      } else {
        mainProgramUrl = `/events/${this.props.currentEvent.event_code}`;
      }
      mainProgram = <a href={mainProgramUrl} target="_blank" id="programBtn">
          <img className="zoom mProgram" src={MainProgram}/>
      </a>
    }


    if (disabledGames) {
      onClickMemoryGame = null;
      onClickFishingBoat = null;
      onClickPowerTower = null;
      onClickFruitFall = null
    } else {
      onClickMemoryGame = () => window.open(memoryGameUrl, "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=750, height=770, left=350, top=200")
      onClickFishingBoat = () => window.open(fishingBoatUrl, "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=750, height=770, left=350, top=200")
      onClickPowerTower = () => window.open(powerTowerUrl, "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=750, height=770, left=350, top=200")
      onClickFruitFall = () => window.open(fruitFallUrl, "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=750, height=770, left=350, top=200")
    }
    return (
      <div className="bg">
        <div className="cntr">

            <img className="hdr" src={Header}/>
            {/* <img className="island" src={Island}/> */}
            <div className="island">

                <a type="button" data-bs-toggle="modal" data-bs-target="#boraModal" id="platinumBtn">
                    <img className="zoom bora" src={Bora}/>
                </a>
                {/* Start modal for iframe */}
                <div className="modal fade" id="boraModal" tabIndex="-1" aria-labelledby="boraModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Iframe</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End modal for iframe */}

                {mainProgram}
                <a href="#" target="_blank" id="diamondBtn">
                    <img className="zoom diamond" src={Diamond}/>
                </a>
                <a type="button" disabled={this.props.isAdmin} data-bs-toggle="modal" data-bs-target="#feedbackModal" id="feedbackBtn">
                    <img className="zoom feedback" src={Feedback} disabled={this.props.isAdmin}/>
                </a>

                {/* Start modal for feedback */}
                <ExpoFeedBackForm
                  ratings = {this.props.ratings}
                />
                {/* End modal for feedback */}

                <a href="#" target="_blank" id="alsBtn">
                    <img className="zoom als" src={Als}/>
                </a>
                <a href="#" id="salesBtn" onClick={onClickFishingBoat}>
                    <img className="zoom sales" src={Sales}/>
                </a>
                <a href="#" id="fruitBtn" onClick={onClickFruitFall}>
                    <img className="zoom fruit" src={Fruit}/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid1tBtn">
                    <img className="zoom corVid1" src={Pin} alt="corVid1" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid2tBtn">
                    <img className="zoom corVid2" src={Pin} alt="corVid2"/>
                </a>
                <a href="#" id="bonanzaBtn" onClick={onClickMemoryGame}>
                    <img className="zoom bonanza" src={Bonanza} />
                </a>
                <a href="#" id="powertBtn" onClick={onClickPowerTower}>
                    <img className="zoom power" src={Power}/>
                </a>
                <a href="#" id="game3tBtn">
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
