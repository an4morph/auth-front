import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

function Nav() {
  const links = [
    { link: '/', text: 'Главная страница' },
    { link: '/login', text: 'Вход' },
    { link: '/signin', text: 'Регистрация' },
  ]
  return (
    <div className={styles.wrapper}>
      {
        links.map((item) => (
          <NavLink
            key={item.text}
            className={styles.link}
            to={item.link}
            exact
            activeClassName={styles.active}
          >{item.text}
          </NavLink>
        ))
      }
    </div>
  )
}

export default Nav
