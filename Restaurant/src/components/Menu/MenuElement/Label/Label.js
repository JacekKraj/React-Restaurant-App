import React from 'react';
import styles from './Label.module.css';

const label = props => (
  <div className={styles.Label}>
    <span className={styles.info}>{props.labelFor}</span>
  </div>
);

export default label;
