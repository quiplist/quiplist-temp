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
import AlsHawaii from "pdfs/als_hawaii.pdf";
import DiamondInvitational from "pdfs/diamond_invitational.pdf";
import PlatinumSeminar from "pdfs/platinum_seminar.pdf";
import CorePlusPdf from "pdfs/core_plus.pdf";
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
      pin1Video: false,
      pin2Video: false,
      pin3Video: false,
      pin4Video: false,
      pin5Video: false,
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

  pin1VideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ pin1Video: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pin1VideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ pin1Video: false })
  }

  pin2VideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ pin2Video: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pin2VideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ pin2Video: false })
  }

  pin3VideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ pin3Video: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pin3VideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ pin3Video: false })
  }

  pin4VideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ pin4Video: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pin4VideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ pin4Video: false })
  }

  pin5VideoPlay() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({ pin5Video: true })
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pin5VideoPause() {
    // Pause as well
    //this.refs.vidRef.getInternalPlayer().pauseVideo()
    this.setState({ pin5Video: false })
  }

  render() {
    let pin1Url = "https://www.youtube.com/watch?v=d3ReqRiCeXg";
    let pin2Url = "https://www.youtube.com/watch?v=IePryUxYRl4";
    let pin3Url = "https://www.youtube.com/watch?v=A4J-fbAuVoA";
    let pin4Url = "https://www.youtube.com/watch?v=_G9jT1aXrRY";
    let pin5Url = "https://www.youtube.com/watch?v=yZ_g8vP70rw";
    let customerSalesUrl = "https://www.youtube.com/watch?v=BJXuoaz9YN0";
    let bronzeFoundationUrl = "https://www.youtube.com/watch?v=PzATwjeLNt4"
    let bronzeBuilderUrl = "https://www.youtube.com/watch?v=4Xp3rwz1-jg";
    let corePlusLadderUrl = "https://www.youtube.com/watch?v=9JiWPChtekM";
    let anivUrl = "https://www.youtube.com/watch?v=xRZB9k3mrJw";
    let memoryGameUrl = `/events/${this.props.currentEvent.event_code}/games/memory_game`;
    let fishingBoatUrl = `/events/${this.props.currentEvent.event_code}/games/fishing_boat`;
    let powerTowerUrl = `https://ignitrondigital.com/qp/power-game?event_id=${this.props.currentEvent.id}&guest_list_id=${this.props.guestListId}`;
    let fruitFallUrl = `https://ignitrondigital.com/qp/fruit-fall-game?event_id=${this.props.currentEvent.id}&guest_list_id=${this.props.guestListId}`;
    let candyGameUrl = `https://ignitrondigital.com/qp/candy-game?event_id=${this.props.currentEvent.id}&guest_list_id=${this.props.guestListId}`;
    let mainProgramUrl, mainProgram;
    let onClickMemoryGame, onClickFishingBoat, onClickPowerTower, onClickFruitFall, onClickCandyGame;
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
      onClickFruitFall = null;
      onClickCandyGame = null;
    } else {
      onClickMemoryGame = () => window.open(memoryGameUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=1150, height=770, left=150, top=200")
      onClickFishingBoat = () => window.open(fishingBoatUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=1150, height=770, left=150, top=200")
      onClickPowerTower = () => window.open(powerTowerUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=1150, height=770, left=150, top=200")
      onClickFruitFall = () => window.open(fruitFallUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=1150, height=770, left=150, top=200")
      onClickCandyGame = () => window.open(candyGameUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=1150, height=770, left=150, top=200")
    }
    return (
      <div className="bg">
        <div className="cntr">

            <img className="hdr" src={Header}/>
            {/* <img className="island" src={Island}/> */}
            <div className="island">

                <a  data-bs-toggle="modal" id="platinumBtn" data-bs-target="#platinumModal">
                  <img className="zoom bora" src={Bora}/>
                </a>

                <div className="modal fade" id="platinumModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="platinumLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Platinum Seminar</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <embed type="application/pdf" src={PlatinumSeminar} className="modal-pdf" width="1105" height="600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {mainProgram}

                <a  data-bs-toggle="modal" id="diamondBtn" data-bs-target="#diamondModal">
                  <img className="zoom diamond" src={Diamond}/>
                </a>

                <div className="modal fade" id="diamondModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="diamondLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Diamond Invitational</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <embed type="application/pdf" src={DiamondInvitational} className="modal-pdf" width="1105" height="600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  disabled={this.props.isAdmin} data-bs-toggle="modal" data-bs-target="#feedbackModal" id="feedbackBtn">
                    <img className="zoom feedback" src={Feedback} disabled={this.props.isAdmin}/>
                </a>

                {/* uncomment feedback form */}
                <ExpoFeedBackForm
                  ratings = {this.props.ratings}
                />

                <a  data-bs-toggle="modal" id="alsBtn" data-bs-target="#alsModal">
                  <img className="zoom bora" src={Als}/>
                </a>

                <div className="modal fade" id="alsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="alsLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Als Hawaii</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <embed type="application/pdf" src={AlsHawaii} className="modal-pdf" width="1105" height="600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <a href="#" id="salesBtn" onClick={onClickFishingBoat}>
                    <img className="zoom sales" src={Sales}/>
                </a>
                <a href="#" id="fruitBtn" onClick={onClickFruitFall}>
                    <img className="zoom fruit" src={Fruit}/>
                </a>

                <a  data-bs-toggle="modal" id="corVid1tBtn" data-bs-target="#corePlusModal" onClick={this.corePlusLadderVideoPlay.bind(this)}>
                    <img className="zoom corVid1" src={CorePlusIcon}/>
                </a>

                <div className="modal fade" id="corePlusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="corePlusModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Leader Incentives</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.corePlusLadderVideoPause.bind(this)}></button>
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

                <a  data-bs-toggle="modal" id="corVid2tBtn" data-bs-target="#customerSalesModal" onClick={this.customerSalesVideoPlay.bind(this)}>
                    <img className="zoom corVid2" src={CustomerSales}/>
                </a>

                <div className="modal fade" id="customerSalesModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="customerSalesModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Customer Sales Incentives</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.customerSalesVideoPause.bind(this)}></button>
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
                <a href="#" id="powertBtn" onClick={onClickCandyGame}>
                    <img className="zoom power" src={Crush}/>
                </a>
                <a href="#" id="game3tBtn" onClick={onClickPowerTower}>
                    <img className="zoom game3" src={Power}/>
                </a>

                <a  data-bs-toggle="modal" id="alsVid1tBtn" data-bs-target="#pin1Modal" onClick={this.pin1VideoPlay.bind(this)}>
                    <img className="zoom alsVid1" src={Pin}/>
                </a>

                <div className="modal fade" id="pin1Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="pin1ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Diamond Crater Head</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.pin1VideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={pin1Url}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.pin1Video}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  data-bs-toggle="modal" id="alsVid2tBtn" data-bs-target="#pin2Modal" onClick={this.pin2VideoPlay.bind(this)}>
                    <img className="zoom alsVid2" src={Pin}/>
                </a>

                <div className="modal fade" id="pin2Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="pin2ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Pearl Harbor</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.pin2VideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={pin2Url}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.pin2Video}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  data-bs-toggle="modal" id="alsVid3tBtn" data-bs-target="#pin3Modal" onClick={this.pin3VideoPlay.bind(this)}>
                    <img className="zoom alsVid3" src={Pin}/>
                </a>

                <div className="modal fade" id="pin3Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="pin3ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Waikiki Beach</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.pin3VideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={pin3Url}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.pin3Video}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  data-bs-toggle="modal" id="alsVid4tBtn" data-bs-target="#pin4Modal" onClick={this.pin4VideoPlay.bind(this)}>
                    <img className="zoom alsVid4" src={Pin}/>
                </a>

                <div className="modal fade" id="pin4Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="pin4ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Hanauma Bay</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.pin4VideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={pin4Url}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.pin4Video}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" id="alsVid5tBtn">
                    <img className="zoom alsVid5" src={Pin} alt="alsVid5"/>
                </a>

                <a  data-bs-toggle="modal" id="alsVid5tBtn" data-bs-target="#pin5Modal" onClick={this.pin5VideoPlay.bind(this)}>
                    <img className="zoom alsVid5" src={Pin}/>
                </a>

                <div className="modal fade" id="pin5Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="pin5ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Stairway to Heaven</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.pin5VideoPause.bind(this)}></button>
                      </div>
                      <div className="modal-body">
                        <div>
                        <ReactPlayer url={pin5Url}
                          width="100%"
                          pip={true}
                          ref="vidRef"
                          controls={true}
                          playing={this.state.pin5Video}
                        >
                        </ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  data-bs-toggle="modal" id="alsVid6tBtn" data-bs-target="#bronze" onClick={this.bronzeBuilderVideoPlay.bind(this)}>
                    <img className="zoom alsVid6" src={Bronze}/>
                </a>

                <div className="modal fade" id="bronze" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bronzeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Bronze Builder Incentives</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.bronzeBuilderVideoPause.bind(this)}></button>
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

                <a  data-bs-toggle="modal" id="alsVid7tBtn" data-bs-target="#bronzeFoundationModal" onClick={this.bronzeFoundationVideoPlay.bind(this)}>
                    <img className="zoom alsVid7" src={BronzeFoundation}/>
                </a>

                <div className="modal fade" id="bronzeFoundationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bronzeFoundationModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Bronze Foundation Incentives</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.bronzeFoundationVideoPause.bind(this)}></button>
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

                <a  data-bs-toggle="modal" id="corBtn" data-bs-target="#coreModal">
                  <img className="zoom cor" src={Coreplus}/>
                </a>

                <div className="modal fade" id="coreModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="coreLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">Core Plus</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <embed type="application/pdf" src={CorePlusPdf} className="modal-pdf" width="1105" height="600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a  data-bs-toggle="modal" id="anivBtn" data-bs-target="#anivModal" onClick={this.anivVideoPlay.bind(this)}>
                    <img className="zoom aniv" src={Aniv}/>
                </a>

                <div className="modal fade" id="anivModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="anivModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="boraModalLabel">25th Anniversary</h5>
                        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.anivVideoPause.bind(this)}></button>
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
