import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="5 credits for $5"
        description="card number '4242 4242 4242 4242'"
        amount={500} //5 dollars in cents
        token={token => this.props.handleToken(token)} //callback function
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
