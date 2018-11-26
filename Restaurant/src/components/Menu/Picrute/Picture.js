import React from 'react';
import styles from './Picture.module.css';

const picture = props => (
  <div
    className={styles.Picture}
    style={{ backgroundImage: 'url(' + props.bgImage + ')' }}
  />
);

export default picture;
