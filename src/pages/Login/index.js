import React from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import style from './page.module.css'
import { changeField, loginAction } from '../../store/actions'
import PageWrapper from '../../components/PageWrapper'

function LoginPage({ login, changeValue, username, password }) {
  const handleLogin = () => {
    login({ username, password })
  }

  return (
    <PageWrapper>
      <div className={style.wrapper}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => changeValue('username', e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => changeValue('password', e.target.value)}
        />
        <button
          type="button"
          onClick={handleLogin}
        >
          Войти
        </button>
      </div>
    </PageWrapper>
  )
}

LoginPage.propTypes = {
  login: func,
  changeValue: func,
  username: string,
  password: string,
}

const mapStateToProps = (state) => ({
  username: state.forms.login.username,
  password: state.forms.login.password,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (fieldName, value) => dispatch(changeField('login', fieldName, value)),
  login: (data) => dispatch(loginAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
