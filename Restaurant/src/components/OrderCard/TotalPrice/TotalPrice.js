import React from 'react';
import styles from './TotalPrice.module.css';
import cx from 'classnames';

const totalPrice = props => {
  const classes = cx(
    styles.totalPrice,
    {
      [styles.disabler]: props.cost <= 0
    },
    {
      [styles.smallElement]: props.smallScreen
    }
  );
  let totalPrice = 'Total price: ';
  if (props.smallScreen) totalPrice = 'Total: ';
  return (
    <span className={classes}>
      {totalPrice}
      {props.cost}$
    </span>
  );
};

export default totalPrice;
