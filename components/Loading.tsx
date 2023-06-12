import * as React from 'react'

import styles from './styles.module.css'

export const Loading: React.FC = () => (
  <div className={styles.container}>
    <span className={styles.loader}></span>
  </div>
)
