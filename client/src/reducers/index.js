import { combineReducers } from 'redux'
import userReducer from './userReducer'
import surveysReducer from './surveysReducer'
import { reducer as reduxForm } from 'redux-form'

export default combineReducers({
  user: userReducer,
  surveys: surveysReducer,
  form: reduxForm
})
