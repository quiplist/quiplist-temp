import React  from 'react';
import PropTypes from "prop-types";
import Questions from "./Questions";

class SelectLetters extends React.Component {

  render() {

    return (
      <div className="choices--letters">
                <form>
                  <div className="row mt-2">
                    <div className="col-6 col-md-3 col-lg-3">
                       <div className="form-check px-0">
                         <input type="radio" id="letter1" name="letter" value="A"/>
                         <label htmlFor="letter1">A</label>
                       </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3">
                      <div className="form-check px-0">
                        <input type="radio" id="letter2" name="letter" value="B"/>
                        <label htmlFor="letter2">B</label>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3">
                      <div className="form-check px-0">
                        <input type="radio" id="letter3" name="letter" value="C"/>
                        <label htmlFor="letter3">C</label>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3">
                      <div className="form-check px-0">
                        <input type="radio" id="letter4" name="letter" value="D" />
                        <label htmlFor="letter4">D</label>
                      </div>
                    </div>
                    <div className="col-12 my-3 text-center">
                      <button type="submit" className="btn btn-blue">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
    )
  }
}


export default SelectLetters
