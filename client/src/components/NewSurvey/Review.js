import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFieldsList'
import { submitSurvey } from '../../actions'
import { withRouter } from 'react-router-dom'

const Review = ({ onCancel, values, submitSurvey, history }) => {
  const renderContent = _.map(formFields, ({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{values[name]}</div>
    </div>
  ))

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {renderContent}
      <button
        className="yellow darken-2 white-text btn-flat"
        onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(values, history)}
        className="green white-text btn-flat right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ values: state.form.surveyForm.values })
export default connect(mapStateToProps, { submitSurvey })(withRouter(Review))
