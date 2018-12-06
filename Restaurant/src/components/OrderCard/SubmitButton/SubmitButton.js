import React, { Component } from 'react';
import styles from './SubmitButton.module.css';
import cx from 'classnames';

class SubmitButton extends Component {
  render() {
    const classes = cx(styles.myButton, {
      [styles.bump]: this.props.isSubmitButtonBumping
    });

    return (
      <button
        className={classes}
        disabled={this.props.disableHandler}
        onClick={this.props.SubmitOnClick}
      >
        CHECK ORDER
      </button>
    );
  }
}

export default SubmitButton;
