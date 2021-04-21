import React  from 'react';
import PropTypes from "prop-types";
import PlayPausePagination from "./PlayPausePagination";

class QuestionnaireAction extends React.Component {

  render() {
    
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="action-wrapper">
          <fieldset>
            <legend>Questionnaire</legend>
            <p className="my-0">Question:</p>
            <p>{this.props.currentQuestionnaire.question}</p>
            <PlayPausePagination
              modelName={"questionnaires"}
              totalRecords={this.props.totalQuestionnaires}
              pageLimit={1}
              pageNeighbours={1}
              currentData={this.props.currentQuestionnaire}
              currentEvent={this.props.currentEvent}
              onPageChanged={this.props.onQuestionnairePageChanged}
              playQuestionnaire = {questionnaire => this.props.playQuestionnaire(questionnaire)}
            />
          </fieldset>
        </div>
      </div>
    )
  }
}


export default QuestionnaireAction
