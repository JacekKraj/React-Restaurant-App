import React from 'react';
import styles from './Summary.module.css';
import Backdrop from '../Backdrop/Backdrop';
import SummaryElements from './SummaryElements/SummaryElements';

const summary = props => (
  <>
    <div className={styles.Summary}>
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
      />
    </div>
    <Backdrop onClick={props.backdrop} />
  </>
);

export default summary;
