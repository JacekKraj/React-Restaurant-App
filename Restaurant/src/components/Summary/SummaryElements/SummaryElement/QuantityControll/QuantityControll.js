import React from 'react';
import styles from './QuantityControll.module.css';
import addButton from '../../../../../assets/buttons/plus.png';
import removeButton from '../../../../../assets/buttons/remove.png';
import subtractButton from '../../../../../assets/buttons/negative.png';

const quantityControll = props => {
  let buttonType = removeButton;
  props.quantity > 1
    ? (buttonType = subtractButton)
    : (buttonType = removeButton);

  return (
    <div className={styles.wraper}>
      <div
        className={styles.button1}
        style={{ backgroundImage: 'url(' + buttonType + ')' }}
        onClick={() => props.remove(props.label)}
      />
      <div className={styles.controler}>{props.quantity}</div>
      <div
        className={styles.button2}
        style={{ backgroundImage: 'url(' + addButton + ')' }}
        onClick={() => props.add(props.label)}
      />
    </div>
  );
};

export default quantityControll;
