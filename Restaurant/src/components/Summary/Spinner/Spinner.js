import React from 'react';
import styles from './Spinner.module.css';
import cx from 'classnames';

const spinner = props => {
  const checkMarkClasses = cx(styles.checkmark, styles.draw, {
    [styles.checked]: props.done
  });
  const ringClasses = cx(styles.circleLoader, {
    [styles.loadComplete]: props.done
  });

  return (
    <div className={ringClasses}>
      <div className={checkMarkClasses} />
    </div>
  );
};

export default spinner;
