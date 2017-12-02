import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Form from './Form'
import Review from './Review'

class NewSurvey extends Component {
  state = { showReview: false }

  formSubmitted = () => this.setState({ showReview: true })

  closeReview = () => this.setState({ showReview: false })

  renderContent = () =>
    this.state.showReview ? (
      <Review onCancel={this.closeReview} />
    ) : (
      <Form onSurveySubmit={this.formSubmitted} />
    )

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default reduxForm({
  form: 'surveyForm'
})(NewSurvey)
