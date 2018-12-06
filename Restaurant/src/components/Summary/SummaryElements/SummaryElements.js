import React from 'react';
import styles from './SummaryElements.module.css';
import SummaryElement from './SummaryElement/SummaryElement';
import DiscountButton from './DiscountButton/DiscountButton';

let inputValue;

const summaryElements = props => {
  const allProducts = { ...props.meals, ...props.drinks, ...props.sweets };
  const selectedProducts = Object.keys(allProducts).filter(
    product => allProducts[product] > 0
  );

  const saveInputValue = event => {
    inputValue = event.target.value;
  };

  const elementsToRender = selectedProducts.map(product => (
    <SummaryElement
      label={product}
      quantity={allProducts[product]}
      cost={props.prices[product]}
      add={props.add}
      remove={props.remove}
      key={product}
    />
  ));

  const keyValuePairs = { ingredients: {}, price: props.price };
  selectedProducts.forEach(product => {
    keyValuePairs.ingredients[product] = allProducts[product];
  });

  return (
    <>
      <div className={styles.SummaryElements}>{elementsToRender}</div>
      <div className={styles.discount}>
        <input
          type="text"
          placeholder="Enter discount code"
          onChange={saveInputValue}
        />
        <button
          onClick={() => props.discountHandler(inputValue)}
          className={styles.use}
        >
          USE CODE
        </button>
      </div>
      <div className={styles.totalPrice}>
        Total price: {props.price}$
        <DiscountButton
          discountSize={props.discountSize}
          removeDiscount={props.removeDiscount}
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.backButton} onClick={props.close}>
          BACK
        </button>
        <button
          className={styles.orderButton}
          disabled={props.price === '0.00'}
          onClick={() => props.placeOrder(keyValuePairs)}
        >
          ORDER NOW
        </button>
      </div>
    </>
  );
};

export default summaryElements;
