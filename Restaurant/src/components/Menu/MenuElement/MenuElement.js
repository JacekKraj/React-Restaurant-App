import React from 'react';
import styles from './MenuElement.module.css';
import Label from './Label/Label';

const menuElement = props => (
  <div
    className={styles.MenuElement}
    style={{ backgroundImage: 'url(' + props.bgImage + ')' }}
    onClick={() => props.onClick(props.type)}
  >
    <Label labelFor={props.labelFor} />
  </div>
);

export default menuElement;
