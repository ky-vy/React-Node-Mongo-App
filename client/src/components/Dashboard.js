import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import List from './Surveys/List'

class Dashboard extends Component {
  renderContent = () => {
    return !this.props.user ? (
      <h3>You need to log in</h3>
    ) : (
      <div>
        <List />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
  render() {
    return <div>{this.renderContent()}</div>
  }
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Dashboard)
