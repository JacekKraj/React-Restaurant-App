import React from 'react';
import styles from './ControlButton.module.css';
import AddButtonIcon from '../../../../assets/buttons/plus.png';
import RemoveButtonIcon from '../../../../assets/buttons/negative.png';

const controlButton = props => {
  let buttonType = AddButtonIcon;
  if (props.task === 'RemoveButton') buttonType = RemoveButtonIcon;
  return (
    <div
      className={styles[props.task]}
      style={{ backgroundImage: 'url(' + buttonType + ')' }}
      onClick={props.click}
    />
  );
};

export default controlButton;
