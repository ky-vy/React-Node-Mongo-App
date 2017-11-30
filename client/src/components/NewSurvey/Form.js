import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import FormField from './FormField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFieldsList'

class Form extends Component {
  renderFields = () =>
    _.map(formFields, ({ label, name }) => (
      <Field
        key={name}
        component={FormField}
        type="text"
        label={label}
        name={name}
      />
    ))

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You need to write something'
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(Form)
