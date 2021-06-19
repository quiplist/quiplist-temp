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
import BronzeFoundation from "images/bronzeFoundation.png";
import Bronze from "images/bronze.png";
import Crush from "images/crush.png";
import CorePlusIcon from "images/corePlusIcon.png";
import CustomerSales from "images/customerSales.png";
//import AlsHawaii from "pdfs/als_hawaii.pdf";
// import Diamond_Invitational from "pdfs/diamond_invitational.pdf";
// import Platinum_Seminar from "pdfs/platinum_seminar.png";
import ExpoFeedBackForm from './ExpoFeedBackForm';
import ReactPlayer from 'react-player'

class ExpoMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerSalesVideo: false,
      bronzeFoundationVideo: false,
      bronzeBuilderVideo: false,
      corePlusLadderVideo: false,
      anivVideo: false,
    };
  }

  customerSalesVideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ customerSalesVideo: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  customerSalesVideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ customerSalesVideo: false })
  }

  bronzeFoundationVideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ bronzeFoundationVideo: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  bronzeFoundationVideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ bronzeFoundationVideo: false })
  }

  bronzeBuilderVideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ bronzeBuilderVideo: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  bronzeBuilderVideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ bronzeBuilderVideo: false })
  }

  corePlusLadderVideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ corePlusLadderVideo: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  corePlusLadderVideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ corePlusLadderVideo: false })
  }

  anivVideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ anivVideo: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  anivVideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ anivVideo: false })
  }

  render() {
    let customerSalesUrl = "https://www.youtube.com/watch?v=BJXuoaz9YN0";
    let bronzeFoundationUrl = "https://www.youtube.com/watch?v=PzATwjeLNt4"
    let bronzeBuilderUrl = "https://www.youtube.com/watch?v=4Xp3rwz1-jg";
    let corePlusLadderUrl = "https://youtu.be/ri0oBXYu0H4";
    let anivUrl = "https://youtu.be/5Q_z32uRsSU";
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

                <a type="button" id="platinumBtn">
                    <img className="zoom bora" src={Bora}/>
                </a>
                {/* Start modal for iframe */}


                {/* End modal for iframe */}

                {mainProgram}
                <a href="#"  id="diamondBtn">
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

                <a href="#"  id="alsBtn">
                    <img className="zoom als" src={Als}/>
                </a>
                <a href="#" id="salesBtn" onClick={onClickFishingBoat}>
                    <img className="zoom sales" src={Sales}/>
                </a>
                <a href="#" id="fruitBtn" onClick={onClickFruitFall}>
                    <img className="zoom fruit" src={Fruit}/>
                </a>

                <a type="button" data-bs-toggle="modal" id="corVid1tBtn" data-bs-target="#corePlusModal" onClick={this.corePlusLadderVideoPlay.bind(this)}>
                    <img className="zoom corVid1" src={CorePlusIcon}/>
                </a>

                <div className="modal fade" id="corePlusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="corePlusModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Core Plus Ladder</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.corePlusLadderVideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={corePlusLadderUrl}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.corePlusLadderVideo}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a type="button" data-bs-toggle="modal" id="corVid2tBtn" data-bs-target="#customerSalesModal" onClick={this.customerSalesVideoPlay.bind(this)}>
                    <img className="zoom corVid2" src={CustomerSales}/>
                </a>

                <div className="modal fade" id="customerSalesModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="customerSalesModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Customer Sales Incentives</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.customerSalesVideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={customerSalesUrl}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.customerSalesVideo}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" id="bonanzaBtn" onClick={onClickMemoryGame}>
                    <img className="zoom bonanza" src={Bonanza} />
                </a>
                <a href="#" id="powertBtn" onClick={onClickPowerTower}>
                    <img className="zoom power" src={Crush}/>
                </a>
                <a href="#" id="game3tBtn" onClick={onClickPowerTower}>
                    <img className="zoom game3" src={Power}/>
                </a>
                <a href="#" id="alsVid1tBtn">
                    <img className="zoom alsVid1" src={Pin} alt="alsVid1"/>
                </a>
                <a href="#" id="alsVid2tBtn">
                    <img className="zoom alsVid2" src={Pin} alt="alsVid2"/>
                </a>
                <a href="#" id="alsVid3tBtn">
                    <img className="zoom alsVid3" src={Pin} alt="alsVid3"/>
                </a>
                <a href="#" id="alsVid4tBtn">
                    <img className="zoom alsVid4" src={Pin} alt="alsVid4"/>
                </a>
                <a href="#" id="alsVid5tBtn">
                    <img className="zoom alsVid5" src={Pin} alt="alsVid5"/>
                </a>

                <a type="button" data-bs-toggle="modal" id="alsVid6tBtn" data-bs-target="#bronze" onClick={this.bronzeBuilderVideoPlay.bind(this)}>
                    <img className="zoom alsVid6" src={Bronze}/>
                </a>

                <div className="modal fade" id="bronze" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bronzeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Bronze Builder Incentives</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.bronzeBuilderVideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={bronzeBuilderUrl}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.bronzeBuilderVideo}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a type="button" data-bs-toggle="modal" id="alsVid7tBtn" data-bs-target="#bronzeFoundationModal" onClick={this.bronzeFoundationVideoPlay.bind(this)}>
                    <img className="zoom alsVid7" src={BronzeFoundation}/>
                </a>

                <div className="modal fade" id="bronzeFoundationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bronzeFoundationModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Bronze Foundation Incentives</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.bronzeFoundationVideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={bronzeFoundationUrl}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.bronzeFoundationVideo}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <a href="#"  id="corBtn">
                    <img className="zoom cor" src={Coreplus}/>
                </a>

                <a type="button" data-bs-toggle="modal" id="anivBtn" data-bs-target="#anivModal" onClick={this.anivVideoPlay.bind(this)}>
                    <img className="zoom aniv" src={Aniv}/>
                </a>

                <div className="modal fade" id="anivModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="anivModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">25th Anniversary</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.anivVideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={anivUrl}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.anivVideo}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



            </div>



        </div>
      </div>
    )
  }
}

export default ExpoMap
