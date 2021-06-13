import React  from 'react';
import Bora from "images/bora.png";
import MainProgram from "images/main_program.png";
import Diamond from "images/diamond.png";
import Feedback from "images/feedback.png";
import Als from "images/als.png";
import Coreplus from "images/coreplus.png";
import Aniv from "images/aniv.png";
import Standin from "images/standin.jpg";
import Island from "images/island.png";


class Expo extends React.Component {

    openModal(modal){
        var _targetModal = document.getElementById(modal);

        _targetModal.style.display = "block";
    }

    closeModal(modal){
        var _targetModal = document.getElementById(modal);

        _targetModal.style.display = "none";
    }

    render() {

        return (
            <div className="bg">
                <div className="cntr">
                    <br/><img className="island" src={Island}/> 
                    <a href="#" id="platinumBtn" onClick={()=>this.openModal("platinumModal")} > 
                        <img className="zoom bora" src={Bora}/> 
                    </a>
                    <a href="#" id="programBtn" onClick={()=>this.openModal("programModal")}> 
                        <img className="zoom mProgram" src={MainProgram}/> 
                    </a>
                    <a href="#" id="diamondBtn" onClick={()=>this.openModal("diamondModal")}>  
                        <img className="zoom diamond" src={Diamond}/> 
                    </a>
                    <a href="#" id="feedbackBtn" onClick={()=>this.openModal("feedbackModal")}> 
                        <img className="zoom feedback" src={Feedback}/> 
                    </a>
                    <a href="#" id="alsBtn" onClick={()=>this.openModal("alsModal")}> 
                        <img className="zoom als" src={Als}/> 
                    </a>
                    <a href="#" id="corBtn" onClick={()=>this.openModal("corModal")}> 
                        <img className="zoom cor" src={Coreplus}/> 
                    </a>
                    <a href="#" id="anivBtn" onClick={()=>this.openModal("anivModal")}> 
                        <img className="zoom aniv" src={Aniv}/> 
                    </a>

                    {/* Platinum Modal */}
                    <div id="platinumModal" className="modal">

                        {/* Platinum Content */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={()=>this.closeModal("platinumModal")}>&times;</span>
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
                                                <td> 
                                                    <a href="#" target="_blank" >
                                                        <img className="img_thumb" src={Standin} alt="Paris"/>
                                                    </a>
                                                </td>
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
                    {/* End of Platinum Modal */}

                    {/* Start Program Modal */}
                    <div id="programModal" className="modal">

                        {/* Program Content  */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={()=>this.closeModal("programModal")}>&times;</span>
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
                                <span className="close" onClick={()=>this.closeModal("diamondModal")}>&times;</span>
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
                                <span className="close" onClick={()=>this.closeModal("feedbackModal")}>&times;</span>
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
                                <span className="close" onClick={()=>this.closeModal("corModal")}>&times;</span>
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
                                <span className="close" onClick={()=>this.closeModal("alsModal")}>&times;</span>
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
                                <span className="close" onClick={()=>this.closeModal("anivModal")}>&times;</span>
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

export default Expo
