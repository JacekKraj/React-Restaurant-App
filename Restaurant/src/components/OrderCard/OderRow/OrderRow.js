import React from 'react';
import styles from './OrderRow.module.css';
import Order from './Order/Order';

const orderRow = props => (
  <div className={styles.OrderRow}>
    <Order bgImage={props.first} />
    <Order bgImage={props.second} />
    <Order bgImage={props.third} />
  </div>
);

export default orderRow;
