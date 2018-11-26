import React from 'react';
import styles from './Menu.module.css';
import MenuElement from './MenuElement/MenuElement';
import Picture from './Picrute/Picture';
import drink from '../../assets/menu/drink2.jpg';
import meal from '../../assets/menu/fries2.jpg';
import sweet from '../../assets/menu/dunat2.jpg';
import hat from '../../assets/menu/hat.png';
import hatReversed from '../../assets/menu/hatReversed.png';
import TotalPrice from '../OrderCard/TotalPrice/TotalPrice';
import SubmitButton from '../OrderCard/SubmitButton/SubmitButton';

const menu = props => (
  <div className={styles.Menu}>
    <Picture bgImage={hatReversed} />
    <MenuElement
      bgImage={meal}
      labelFor={'Meals'}
      onClick={props.toggleProducts}
      type={'meals'}
    />
    <MenuElement
      bgImage={sweet}
      labelFor={'Sweets'}
      onClick={props.toggleProducts}
      type={'sweets'}
    />
    <MenuElement
      bgImage={drink}
      labelFor={'Drinks'}
      onClick={props.toggleProducts}
      type={'drinks'}
    />
    <Picture bgImage={hat} />
    <TotalPrice cost={props.cost} smallScreen={true} />
    <SubmitButton
      disableHandler={props.cost === 0}
      SubmitOnClick={props.SubmitOnClick}
      isSubmitButtonBumping={props.isSubmitButtonBumping}
      smallScreen={true}
    />
  </div>
);

export default menu;
