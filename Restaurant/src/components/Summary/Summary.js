import React from 'react';
import styles from './Summary.module.css';
import Backdrop from '../Backdrop/Backdrop';
import SummaryElements from './SummaryElements/SummaryElements';
import Spinner from './Spinner/Spinner';
import errorIcon from '../../assets/buttons/error2.png';
import cx from 'classnames';

const summary = props => {
  let summaryElements = (
    <SummaryElements
      meals={props.meals}
      sweets={props.sweets}
      drinks={props.drinks}
      prices={props.prices}
      add={props.add}
      remove={props.remove}
      price={props.price}
      discountHandler={props.discountHandler}
      discountSize={props.discountSize}
      removeDiscount={props.removeDiscount}
      close={props.backdrop}
      placeOrder={props.placeOrder}
    />
  );

  let classes = styles.Summary;
  let toggleBackdrop = props.backdrop;

  if (props.showSpinner) {
    summaryElements = (
      <>
        <Spinner />
        <h2>Placing order...</h2>
      </>
    );
    classes = cx(styles.Summary, styles.Spinner);
    toggleBackdrop = null;
  }

  if (props.done) {
    summaryElements = (
      <>
        <Spinner done />
        <h2>Order placed!</h2>
      </>
    );
    classes = cx(styles.Summary, styles.Spinner);
  }

  if (props.apiError) {
    summaryElements = (
      <>
        <img src={errorIcon} alt="Error!" className={styles.error} />
        <h2>Sorry! Something went wrong! Try again later...</h2>
      </>
    );
    classes = cx(styles.Summary, styles.Spinner);
  }

  return (
    <>
      <div className={classes}>{summaryElements}</div>
      <Backdrop onClick={toggleBackdrop} />
    </>
  );
};

export default summary;
