import React  from 'react';
import Bora from "images/bora.png";
import MainProgram from "images/main_program copy.png";
import Diamond from "images/diamond copy.png";
import Feedback from "images/feedback copy.png";
import Als from "images/als copy.png";
import Coreplus from "images/coreplus copy.png";
import Aniv from "images/aniv copy.png";
import Standin from "images/standin.jpg";
import Island from "images/island copy.png";
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
      <div className="row bg">
        <div className="cntr">
          <br/>

          <img className="island" src={Island}/>
          <img className="hdr" src={Header}/>


          <a href="#"  target="_blank"  id="platinumBtn"> <img className="zoom bora" src={Bora}/> </a>
          <a href="#" id="programBtn"> <img className="zoom mProgram" src={MainProgram}/> </a>
          <a href="#"  target="_blank"  id="diamondBtn"> <img className="zoom diamond" src={Diamond}/> </a>
          <a href="#" id="feedbackBtn"> <img className="zoom feedback" src={Feedback}/> </a>
          <a href="#"  target="_blank"   id="alsBtn"> <img className="zoom als" src={Als}/> </a>
          <a href="games/als-game_001.html" target="_blank"  id="salesBtn"> <img className="zoom sales" src={Sales}/> </a>
          <a href="games/als-game_002.html" target="_blank"  id="fruitBtn"> <img className="zoom fruit" src={Fruit}/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid1tBtn"> <img className="zoom corVid1" src={Pin} alt="corVid1" /> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"  id="corVid2tBtn"> <img className="zoom corVid2" src={Pin} alt="corVid2"/> </a>
          <a href="games/coreplus-game_001.html" target="_blank"  id="bonanzaBtn"> <img className="zoom bonanza" src={Bonanza}/> </a>
          <a href="games/coreplus-game_002.html" target="_blank"  id="powertBtn"> <img className="zoom power" src={Power}/> </a>
          <a href="games/coreplus-game_003.html" target="_blank"  id="game3tBtn"> <img className="zoom game3" src={Power}/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   target="_blank" id="alsVid1tBtn"> <img className="zoom alsVid1" src={Pin} alt="alsVid1"/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   target="_blank" id="alsVid2tBtn"> <img className="zoom alsVid2" src={Pin} alt="alsVid2"/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   target="_blank" id="alsVid3tBtn"> <img className="zoom alsVid3" src={Pin} alt="alsVid3"/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   target="_blank" id="alsVid4tBtn"> <img className="zoom alsVid4" src={Pin} alt="alsVid4"/> </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   target="_blank" id="alsVid5tBtn"> <img className="zoom alsVid5" src={Pin} alt="alsVid5"/> </a>


          <a href="#"  target="_blank"   id="corBtn"> <img className="zoom cor" src={Coreplus}/></a>
          <a href="#"  target="_blank"   id="anivBtn"> <img className="zoom aniv" src={Aniv}/> </a>

          {/* Platinum Modal */}
          <div id="platinumModal" className="modal">
            {/* Platinum Content */}
            <div className="modal-content">
              <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Platinum Seminar</h2>
              </div>
              <div className="modal-body">
                <center>
                  <table>
                      <tbody>
                      <tr>
                          <td> <h3>Infographics</h3></td>
                          <td> <h3>What to Expect</h3></td>
                      </tr>
                      <tr>
                          <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris"/></a></td>
                          <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris"/></a></td>
                      </tr>
                      </tbody>
                  </table>
                </center>
              </div>
              <div className="modal-footer">
                  <h3>Modal Footer</h3>
              </div>
            </div>
          </div>
          {/* End of Platinum Modal */}

          {/* Start Program Modal */}
          <div id="programModal" className="modal">

              {/* Program Content  */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>Main Program</h2>
                  </div>
                  <div className="modal-body">
                      <p>Some text in the Modal Body</p>
                      <p>Some other text...</p>
                  </div>
                  <div className="modal-footer">
                      <h3>Modal Footer</h3>
                  </div>
              </div>
          </div>
          {/* End Program Modal */}

          {/* Start of Diamond Modal */}
          <div id="diamondModal" className="modal">

              {/*  Diamond Content */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>Diamond Invitational</h2>
                  </div>
                  <div className="modal-body">
                      <center>
                          <table>
                              <tbody>
                                  <tr>
                                      <td> <h3>Infographics</h3></td>
                                      <td> <h3>What to Expect</h3></td>

                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                              </tbody>
                          </table>
                      </center>
                  </div>
                  <div className="modal-footer">
                      <h3>Modal Footer</h3>
                  </div>
              </div>
          </div>
          {/* End of Diamond Modal */}

          {/* Start of Feedback Modal */}
          <div id="feedbackModal" className="modal">

              {/* feedback Content */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>Feedback</h2>
                  </div>
                  <div className="modal-body">
                      <p>Some text in the Modal Body</p>
                      <p>Some other text...</p>
                  </div>
                  <div className="modal-footer">
                      <h3>Modal Footer</h3>
                  </div>
              </div>
          </div>
          {/* End of Feedback Modal */}

          {/* Start CorePlus Modal */}
          <div id="corModal" className="modal">

              {/*  CorePlus Content --> */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>Core Plus</h2>
                  </div>
                  <div className="modal-body">
                      <center>
                          <table>
                              <tbody>
                                  <tr>
                                      <td> <h3>Videos</h3></td>
                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                                  <tr>
                                      <td> <h3>Games</h3></td>
                                  </tr>
                                  <tr>
                                      <td> <a href="games/coreplus-game_001.html" target="_blank" ><img className="img_thumb" src={Standin} alt="CorePlus Game 01" /></a></td>
                                      <td> <a href="games/coreplus-game_002.html" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="games/coreplus-game_003.html" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                                  <tr>
                                      <td> <h3>Qualifications</h3></td>
                                  </tr>
                                  <tr>
                                  <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                              </tr>
                              </tbody>
                          </table>
                      </center>
                  </div>
                  <div className="modal-footer">
                      {/* <!-- <h3>Modal Footer</h3> --> */}
                  </div>
              </div>
          </div>
          {/* End CorePlus Modal */}

          {/* Start of als Modal */}
          <div id="alsModal" className="modal">

              {/*  CorePlus Content  */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>ALS Hawaii</h2>
                  </div>
                  <div className="modal-body">
                      <center>
                          <table>
                              <tbody>
                                  <tr>
                                      <td> <h3>Videos</h3></td>
                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                                  <tr>
                                      <td> <h3>Infographics</h3></td>
                                      <td> <h3>Video</h3></td>

                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                                  <tr>
                                      <td> <h3>Games</h3></td>
                                  </tr>
                                  <tr>
                                  <td> <a href="games/als-game_001.html" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  <td> <a href="games/als-game_002.html" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                              </tr>
                              </tbody>
                          </table>
                      </center>
                  </div>
                  <div className="modal-footer">
                      {/* <!-- <h3>Modal Footer</h3> --> */}
                  </div>
              </div>
          </div>
          {/* End of als modal */}

          {/*  Start of Aniv Modal  */}
          <div id="anivModal" className="modal">

              {/* Aniv Content */}
              <div className="modal-content">
                  <div className="modal-header">
                      <span className="close">&times;</span>
                      <h2>ALS Hawaii</h2>
                  </div>
                  <div className="modal-body">
                      <center>
                          <table>
                              <tbody>
                                  <tr>
                                      <td> <h3>Artworks</h3></td>
                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                                  <tr>
                                      <td> <h3>Video</h3></td>
                                  </tr>
                                  <tr>
                                      <td> <a href="#" target="_blank" ><img className="img_thumb" src={Standin} alt="Paris" /></a></td>
                                  </tr>
                              </tbody>
                          </table>
                      </center>
                  </div>
                  <div className="modal-footer">
                      {/* <!-- <h3>Modal Footer</h3> --> */}
                  </div>
              </div>
          </div>
          {/* End of Aniv Modal */}

        </div>
      </div>
    )
  }
}

export default ExpoMap
