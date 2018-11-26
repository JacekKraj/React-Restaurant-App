import React, { Component } from 'react';
import styles from './OrderCard.module.css';
import Order from './Order/Order';

import beer from '../../assets/color/beer.PNG';
import fries from '../../assets/color/fries.PNG';
import hamburger from '../../assets/color/hamburger.PNG';
import lollipop from '../../assets/color/lollipop.PNG';
import noodles from '../../assets/color/noodles.PNG';
import soda from '../../assets/color/soda.PNG';
import kebab from '../../assets/color/kebab.jpg';
import hotdog from '../../assets/color/hotdog.jpg';
import pizza from '../../assets/color/pizza.jpg';
import rollo from '../../assets/color/rollo.jpg';
import sandwich from '../../assets/color/sandwich.jpg';
import shashlik from '../../assets/color/shashlik.jpg';
import donat from '../../assets/color/donat.jpg';
import icecream1 from '../../assets/color/icecream1.jpg';
import icecream2 from '../../assets/color/icecream2.jpg';
import icecream3 from '../../assets/color/icecream3.jpg';
import cake1 from '../../assets/color/cake1.jpg';
import cake2 from '../../assets/color/cake2.jpg';
import cola1 from '../../assets/color/cola1.png';
import cola2 from '../../assets/color/cola2.png';
import green from '../../assets/color/green.png';
import lemon from '../../assets/color/lemon.png';
import orange from '../../assets/color/orange.png';
import cherry from '../../assets/color/cherry.png';

import SubmitButton from './SubmitButton/SubmitButton';
import chef from '../../assets/color/chef.jpg';
import TotalPrice from './TotalPrice/TotalPrice';

const images = {
  beer,
  fries,
  hamburger,
  lollipop,
  noodles,
  soda,
  kebab,
  hotdog,
  pizza,
  rollo,
  sandwich,
  shashlik,
  donat,
  icecream1,
  icecream2,
  icecream3,
  cake1,
  cake2,
  cola1,
  cola2,
  green,
  lemon,
  orange,
  cherry
};

class OrderCard extends Component {
  render() {
    const productList = Object.keys(this.props.productList).map(type => {
      return <Order key={type} bgImage={images[type]} orderedThing={type} />;
    });

    return (
      <div className={styles.OrderCard}>
        <div className={styles.Orders}>{productList}</div>
        <div
          className={styles.Logo}
          style={{ backgroundImage: 'url(' + chef + ')' }}
        />
        <TotalPrice cost={this.props.cost} />
        <SubmitButton
          isSubmitButtonBumping={this.props.isSubmitButtonBumping}
          disableHandler={this.props.cost === 0}
          SubmitOnClick={this.props.SubmitOnClick}
        />
      </div>
    );
  }
}

export default OrderCard;
