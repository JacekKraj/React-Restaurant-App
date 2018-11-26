import React from 'react';
import styles from './DiscountButton.module.css';
import button from '../../../../assets/buttons/discount.png';
import cx from 'classnames';

const discountButton = props => {
  const discountSize = props.discountSize * -100;

  const classes = cx(styles.discount, {
    [styles.hide]: props.discountSize === 0
  });

  return (
    <div className={classes}>
      <div
        className={styles.delete}
        style={{ backgroundImage: 'url(' + button + ')' }}
        onClick={props.removeDiscount}
      />
      <div className={styles.info}>{discountSize}%</div>
    </div>
  );
};

export default discountButton;
