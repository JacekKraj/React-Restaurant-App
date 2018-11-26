import React from 'react';
import styles from './SummaryElement.module.css';
import QuantityControll from './QuantityControll/QuantityControll';

const properLabels = {
  fries: 'Fries',
  hamburger: 'Hamburger',
  noodles: 'Noodles',
  hotdog: 'HotDog',
  kebab: 'Kebab',
  pizza: 'Pizza',
  rollo: 'Rollo (kebab)',
  sandwich: 'Sandwich',
  shashlik: 'Shashlik',
  beer: 'Beer',
  cola1: 'Cola (can)',
  cola2: 'Cola (bottle)',
  green: 'Green drink',
  lemon: 'Lemon drink',
  orange: 'Orange drink',
  cherry: 'Cherry cola',
  soda: 'White drink',
  lollipop: 'Lollipop',
  donat: 'Donat',
  icecream1: 'Ice cream cone',
  icecream2: 'Ice lolly',
  icecream3: 'Ice cream box',
  cake1: 'Dark cake',
  cake2: 'White cake'
};

const summaryElement = props => {
  let subPrice = props.quantity * props.cost;

  return (
    <div className={styles.SummaryElement}>
      <div className={styles.label}>{properLabels[props.label]}</div>
      <QuantityControll
        quantity={props.quantity}
        add={props.add}
        remove={props.remove}
        label={props.label}
      />
      <div className={styles.cost}>{subPrice}$</div>
    </div>
  );
};

export default summaryElement;
