import React  from 'react';
import PropTypes from "prop-types";

class Questions extends React.Component {

  render() {

    return (
      <div className="question-wrapper">
        <div className="row">
          <div className="col-12">
            <span className="question">Announcement: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, s
            ed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,</span>
            <div className="choices">
              <div className="choices--multiple">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                       <div className="form-check px-0">
                          <input type="radio" id="loremIpsum1" name="loremIpsum" value="loremIpsum1"/>
                          <label htmlFor="loremIpsum1">Lorem 1</label>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="loremIpsum2" name="loremIpsum" value="loremIpsum2"/>
                        <label htmlFor="loremIpsum2">Lorem 2</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="loremIpsum3" name="loremIpsum" value="loremIpsum3"/>
                        <label htmlFor="loremIpsum3">Lorem 3</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="loremIpsum4" name="loremIpsum" value="loremIpsum4" />
                        <label htmlFor="loremIpsum4">Lorem 4</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="choices--true-false d-none">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                       <div className="form-check px-0">
                          <input type="radio" id="true" name="trueFalse" value="true"/>
                          <label htmlFor="true">True</label>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="false" name="trueFalse" value="false"/>
                        <label htmlFor="false">False</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="choices--identification d-none">
                <form className="row align-items-center mt-2">
                  <div className="col-12 col-md-4 col-lg-8">
                    <div className="mb-0">
                        <input type="text" id="identification" className="form-control" placeholder="Answer..."/>
                    </div>
                  </div>

                  <div className="col-12 col-md-8 col-lg-4">
                    <button type="submit" className="btn btn-blue w-100">Submit</button>
                  </div>
                </form>
              </div>
              <div className="choices--poll d-none">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                       <div className="form-check px-0">
                         <input type="radio" id="poll1" name="poll" value="poll1"/>
                         <label htmlFor="poll1">Poll 1</label>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="poll2" name="poll" value="poll2"/>
                        <label htmlFor="poll2">Poll 2</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="poll3" name="poll" value="poll3"/>
                        <label htmlFor="poll3">Poll 3</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                      <div className="form-check px-0">
                        <input type="radio" id="poll4" name="poll" value="poll4" />
                        <label htmlFor="poll4">Poll 4</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="choices--letters d-none">
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
            </div>
            <div className="answer d-none">
              <div className="row text-center">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <h3>Correct Answer</h3>
                      <span className="answer--show">Lorem Ipsum</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h3>Congratulations</h3>
                      <h2>Juan Dela Cruz</h2>
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

// Questions.propTypes = {

// };

export default Questions
