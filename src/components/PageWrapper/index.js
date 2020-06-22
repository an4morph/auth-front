import React from 'react'
import styles from './page.module.css'
import Nav from '../Nav'

function PageWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <Nav />
      { children }
    </div>
  )
}

export default PageWrapper
