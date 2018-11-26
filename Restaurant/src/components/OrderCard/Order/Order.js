import React from 'react';
import styles from './Order.module.css';
import ControlButton from './ControlButton/ControlButton';
import OrderedGoods from '../../../containers/Layout/context';

// let orderedThing = 'beer';
// const allMeals = [
//   'beer',
//   'cake',
//   'champagne',
//   'cupcake',
//   'fries',
//   'hamburger',
//   'lollipop',
//   'noodles',
//   'soda'
// ];

class Order extends React.Component {
  render() {
    // allMeals.forEach(meal =>
    //   this.props.bgImage.includes(meal) ? (orderedThing = meal) : ''
    // );

    let context = this.context;

    const classes = [styles.Order];
    // if (context.data[orderedThing] <= 0) {
    //   classes.push(styles.Off);
    // }

    return (
      <div
        className={classes.join(' ')}
        style={{ backgroundImage: 'url(' + this.props.bgImage + ')' }}
      >
        <ControlButton
          task="AddButton"
          click={context.addProduct.bind(context, this.props.orderedThing)}
        />
        <ControlButton
          task="RemoveButton"
          click={context.removeProduct.bind(context, this.props.orderedThing)}
        />
        <div className={styles.counter}>
          {context.data[this.props.orderedThing]}x
        </div>
        <div className={styles.productPrice}>
          {context.price[this.props.orderedThing]}$
        </div>
      </div>
    );
  }
}
Order.contextType = OrderedGoods;

export default Order;
