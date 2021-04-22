import React  from 'react';
import PropTypes from "prop-types";

class TrueFalse extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.submitAnswer(e.target.value)
  }

  render() {
    let disabled = this.props.isAnswered;
    return (
      <div className="choices--true-false">
        <form>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-2">
               <div className="form-check px-0">
                 <input type="radio" id="choice1" name="answer" value={this.props.currentQuestionnaire.choices[0].name} onClick={this.onChange} disabled={disabled} />
                 <label htmlFor="choice1">{this.props.currentQuestionnaire.choices[0].name}</label>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="choice2" name="answer" value={this.props.currentQuestionnaire.choices[1].name} onClick={this.onChange} disabled={disabled} />
                <label htmlFor="choice2">{this.props.currentQuestionnaire.choices[1].name}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default TrueFalse
