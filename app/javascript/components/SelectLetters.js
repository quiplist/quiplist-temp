import React  from 'react';
import PropTypes from "prop-types";
import Questions from "./Questions";

class SelectLetters extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState(state => ({ answer: [...state.answer, e.target.value] }))
  }

  onSubmit(e) {
    e.preventDefault()
    let answer = '';
    this.state.answer.map((a) =>
      answer += a
    )
    this.props.submitAnswer(answer)
  }

  render() {
    let disabled = this.props.isAnswered;
    return (
      <div className="choices--letters">
        <form onSubmit={this.onSubmit}>
          <div className="row mt-2">
            <div className="col-6 col-md-2 col-lg-2">
               <div className="form-check px-0">
                 <input type="checkbox" id="choice1" name="answer" value={this.props.currentQuestionnaire.choices[0].name} onChange={this.onChange} disabled={disabled}/>
                 <label htmlFor="choice1">{this.props.currentQuestionnaire.choices[0].name}</label>
               </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice2" name="answer" value={this.props.currentQuestionnaire.choices[1].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice2">{this.props.currentQuestionnaire.choices[1].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice3" name="answer" value={this.props.currentQuestionnaire.choices[2].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice3">{this.props.currentQuestionnaire.choices[2].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice4" name="answer" value={this.props.currentQuestionnaire.choices[3].name} onChange={this.onChange} disabled={disabled} />
                <label htmlFor="choice4">{this.props.currentQuestionnaire.choices[3].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice5" name="answer" value={this.props.currentQuestionnaire.choices[4].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice5">{this.props.currentQuestionnaire.choices[4].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice6" name="answer" value={this.props.currentQuestionnaire.choices[5].name} onChange={this.onChange} disabled={disabled} />
                <label htmlFor="choice6">{this.props.currentQuestionnaire.choices[5].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
               <div className="form-check px-0">
                 <input type="checkbox" id="choice7" name="answer" value={this.props.currentQuestionnaire.choices[6].name} onChange={this.onChange} disabled={disabled}/>
                 <label htmlFor="choice7">{this.props.currentQuestionnaire.choices[6].name}</label>
               </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice8" name="answer" value={this.props.currentQuestionnaire.choices[7].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice8">{this.props.currentQuestionnaire.choices[7].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice9" name="answer" value={this.props.currentQuestionnaire.choices[8].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice9">{this.props.currentQuestionnaire.choices[8].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice10" name="answer" value={this.props.currentQuestionnaire.choices[9].name} onChange={this.onChange} disabled={disabled} />
                <label htmlFor="choice10">{this.props.currentQuestionnaire.choices[9].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice11" name="answer" value={this.props.currentQuestionnaire.choices[10].name} onChange={this.onChange} disabled={disabled}/>
                <label htmlFor="choice11">{this.props.currentQuestionnaire.choices[10].name}</label>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <div className="form-check px-0">
                <input type="checkbox" id="choice12" name="answer" value={this.props.currentQuestionnaire.choices[11].name} onChange={this.onChange} disabled={disabled} />
                <label htmlFor="choice12">{this.props.currentQuestionnaire.choices[11].name}</label>
              </div>
            </div>
            <div className="col-12 my-3 text-center">
              <button type="submit" className="btn btn-blue" disabled={disabled}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default SelectLetters
