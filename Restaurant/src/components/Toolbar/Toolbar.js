import React from 'react';
import styles from './Toolbar.module.css';
import logo from '../../assets/menu/logo.png';

const toolbar = () => (
  <div className={styles.Toolbar}>
    <h1>Eat, Sweet and Drink Restaurant</h1>
    <div
      className={styles.logo}
      style={{ backgroundImage: 'url(' + logo + ')' }}
    />
  </div>
);

export default toolbar;
