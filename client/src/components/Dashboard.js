import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  renderContent = () => (this.props.user ? <h1>Dashboard</h1> : 'Please log in')
  render() {
    return <div style={{ textAlign: 'center' }}>{this.renderContent()}</div>
  }
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Dashboard)
