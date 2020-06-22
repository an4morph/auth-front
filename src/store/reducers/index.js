import { combineReducers } from 'redux'
import forms from './forms'
import auth from './auth'

export default combineReducers({
  forms, auth,
})
