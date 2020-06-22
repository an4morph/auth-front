import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import SigninPage from './pages/Signin'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
