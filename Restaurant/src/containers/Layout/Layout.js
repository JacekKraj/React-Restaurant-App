import React, { Component } from 'react';
import styles from './Layout.module.css';
import StartPage from '../../components/StartPage/StartPage';
import OrderCard from '../../components/OrderCard/OrderCard';
import Toolbar from '../../components/Toolbar/Toolbar';
import Menu from '../../components/Menu/Menu';
import OrderedGoods from './context';
import Summary from '../../components/Summary/Summary';
import axios from '../../components/axiosOrder';

const productsPrices = {
  beer: 1.5,
  fries: 2,
  hamburger: 3,
  lollipop: 0.5,
  noodles: 3.5,
  soda: 1,
  hotdog: 2.5,
  kebab: 4,
  pizza: 5,
  rollo: 4,
  sandwich: 3,
  shashlik: 3,
  donat: 1.5,
  icecream1: 2,
  icecream2: 2,
  icecream3: 2,
  cake1: 3,
  cake2: 3,
  cola1: 1.5,
  cola2: 1.5,
  green: 1,
  lemon: 1,
  orange: 1,
  cherry: 1.5
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: {
        fries: 0,
        hamburger: 0,
        noodles: 0,
        hotdog: 0,
        kebab: 0,
        pizza: 0,
        rollo: 0,
        sandwich: 0,
        shashlik: 0
      },
      drinks: {
        beer: 0,
        cola1: 0,
        cola2: 0,
        green: 0,
        lemon: 0,
        orange: 0,
        cherry: 0,
        soda: 0
      },
      sweets: {
        lollipop: 0,
        donat: 0,
        icecream1: 0,
        icecream2: 0,
        icecream3: 0,
        cake1: 0,
        cake2: 0
      },
      prices: {
        total: 0
      },
      isSubmitButtonBumping: false,
      searchedProducts: 'sweets',
      showSummary: false,
      priceDiscount: 0,
      discountCode: {
        BlackFriday20: 0.2,
        Krajewski: 0.1
      },
      orderNumber: 0,
      showSpinner: false,
      done: false,
      apiError: false,
      startApplication: false
    };
    this.baseState = this.state;
  }

  startApplication = () => {
    this.setState({
      startApplication: true
    });
  };

  showSummary = () => {
    this.setState({ showSummary: true });
  };

  hideSummary = () => {
    this.setState({ showSummary: false });
  };

  addProduct = orderedThing => {
    const products = ['meals', 'sweets', 'drinks'];
    const currentProductField = products.filter(product =>
      this.state[product].hasOwnProperty(orderedThing)
    );
    const currentProducts = {
      ...this.state[currentProductField]
    };

    currentProducts[orderedThing]++;
    const currentPrices = {
      ...this.state.prices
    };
    currentPrices.total = currentPrices.total + productsPrices[orderedThing];
    this.setState(
      {
        [currentProductField]: currentProducts,
        prices: currentPrices,
        isSubmitButtonBumping: true
      },
      () => {
        setTimeout(() => {
          this.setState({ isSubmitButtonBumping: false });
        }, 350);
      }
    );
  };

  removeProduct = orderedThing => {
    const products = ['meals', 'sweets', 'drinks'];
    const currentProductField = products.filter(product =>
      this.state[product].hasOwnProperty(orderedThing)
    );
    const currentProducts = {
      ...this.state[currentProductField]
    };

    if (currentProducts[orderedThing] > 0) {
      currentProducts[orderedThing]--;
      const currentPrices = {
        ...this.state.prices
      };
      currentPrices.total = currentPrices.total - productsPrices[orderedThing];
      this.setState(
        {
          [currentProductField]: currentProducts,
          prices: currentPrices,
          isSubmitButtonBumping: true
        },
        () => {
          setTimeout(() => {
            this.setState({ isSubmitButtonBumping: false });
          }, 350);
        }
      );
    }
  };

  toggleProducts = type => {
    this.setState({
      searchedProducts: type
    });
  };

  discountHandler = code => {
    const discountCode = this.state.discountCode;
    if (discountCode.hasOwnProperty(code)) {
      this.setState({
        priceDiscount: discountCode[code]
      });
    }
  };

  removeDiscountHandler = () => {
    this.setState({
      priceDiscount: 0
    });
  };

  placeOrder = input => {
    if (input.ingredients) {
      this.setState({
        showSpinner: true
      });
      input.number = this.state.orderNumber;
      axios
        .post('order.json', input)
        .then(
          this.setState(prevState => {
            return { orderNumber: prevState.orderNumber + 1 };
          })
        )
        .then(response => {
          this.setState(
            {
              done: true
            },
            () => {
              setTimeout(() => {
                const numberHolder = this.state.orderNumber;
                this.setState(this.baseState);
                this.setState({ orderNumber: numberHolder });
              }, 1500);
            }
          );
        })
        .catch(error => {
          this.setState(
            {
              apiError: true
            },
            () => {
              setTimeout(() => {
                const numberHolder = this.state.orderNumber;
                this.setState(this.baseState);
                this.setState({ orderNumber: numberHolder });
              }, 2200);
            }
          );
        });
    }
  };

  render() {
    let applicationWindow = <StartPage onClick={this.startApplication} />;

    if (this.state.startApplication) {
      applicationWindow = (
        <div className={styles.container}>
          {this.state.showSummary ? (
            <Summary
              backdrop={this.hideSummary}
              meals={this.state.meals}
              sweets={this.state.sweets}
              drinks={this.state.drinks}
              price={(
                this.state.prices.total *
                (1 - this.state.priceDiscount)
              ).toFixed(2)}
              prices={productsPrices}
              add={this.addProduct}
              remove={this.removeProduct}
              discountHandler={this.discountHandler}
              discountSize={this.state.priceDiscount}
              removeDiscount={this.removeDiscountHandler}
              placeOrder={this.placeOrder}
              showSpinner={this.state.showSpinner}
              done={this.state.done}
              apiError={this.state.apiError}
            />
          ) : null}
          <Toolbar />
          <OrderedGoods.Provider
            value={{
              data: this.state[this.state.searchedProducts],
              addProduct: this.addProduct,
              removeProduct: this.removeProduct,
              price: productsPrices
            }}
          >
            <OrderCard
              cost={this.state.prices.total}
              productList={this.state[this.state.searchedProducts]}
              isSubmitButtonBumping={this.state.isSubmitButtonBumping}
              SubmitOnClick={this.showSummary}
            />
            <Menu
              toggleProducts={this.toggleProducts}
              isSubmitButtonBumping={this.state.isSubmitButtonBumping}
              SubmitOnClick={this.showSummary}
              cost={this.state.prices.total}
            />
          </OrderedGoods.Provider>
        </div>
      );
    }

    return (
      // <div className={styles.container}>
      //   {this.state.showSummary ? (
      //     <Summary
      //       backdrop={this.hideSummary}
      //       meals={this.state.meals}
      //       sweets={this.state.sweets}
      //       drinks={this.state.drinks}
      //       price={(
      //         this.state.prices.total *
      //         (1 - this.state.priceDiscount)
      //       ).toFixed(2)}
      //       prices={productsPrices}
      //       add={this.addProduct}
      //       remove={this.removeProduct}
      //       discountHandler={this.discountHandler}
      //       discountSize={this.state.priceDiscount}
      //       removeDiscount={this.removeDiscountHandler}
      //       placeOrder={this.placeOrder}
      //       showSpinner={this.state.showSpinner}
      //       done={this.state.done}
      //       apiError={this.state.apiError}
      //     />
      //   ) : null}
      //   <Toolbar />
      //   <OrderedGoods.Provider
      //     value={{
      //       data: this.state[this.state.searchedProducts],
      //       addProduct: this.addProduct,
      //       removeProduct: this.removeProduct,
      //       price: productsPrices
      //     }}
      //   >
      //     <OrderCard
      //       cost={this.state.prices.total}
      //       productList={this.state[this.state.searchedProducts]}
      //       isSubmitButtonBumping={this.state.isSubmitButtonBumping}
      //       SubmitOnClick={this.showSummary}
      //     />
      //     <Menu
      //       toggleProducts={this.toggleProducts}
      //       isSubmitButtonBumping={this.state.isSubmitButtonBumping}
      //       SubmitOnClick={this.showSummary}
      //       cost={this.state.prices.total}
      //     />
      //   </OrderedGoods.Provider>
      // </div>
      // <StartPage onClick={this.startApplication} />

      <>{applicationWindow}</>

      // {
      //   this.state.startApplication ? {
      //     <div className={styles.container}>
      //   {this.state.showSummary ? (
      //     <Summary
      //       backdrop={this.hideSummary}
      //       meals={this.state.meals}
      //       sweets={this.state.sweets}
      //       drinks={this.state.drinks}
      //       price={(
      //         this.state.prices.total *
      //         (1 - this.state.priceDiscount)
      //       ).toFixed(2)}
      //       prices={productsPrices}
      //       add={this.addProduct}
      //       remove={this.removeProduct}
      //       discountHandler={this.discountHandler}
      //       discountSize={this.state.priceDiscount}
      //       removeDiscount={this.removeDiscountHandler}
      //       placeOrder={this.placeOrder}
      //       showSpinner={this.state.showSpinner}
      //       done={this.state.done}
      //       apiError={this.state.apiError}
      //     />
      //   ) : null}
      //   <Toolbar />
      //   <OrderedGoods.Provider
      //     value={{
      //       data: this.state[this.state.searchedProducts],
      //       addProduct: this.addProduct,
      //       removeProduct: this.removeProduct,
      //       price: productsPrices
      //     }}
      //   >
      //     <OrderCard
      //       cost={this.state.prices.total}
      //       productList={this.state[this.state.searchedProducts]}
      //       isSubmitButtonBumping={this.state.isSubmitButtonBumping}
      //       SubmitOnClick={this.showSummary}
      //     />
      //     <Menu
      //       toggleProducts={this.toggleProducts}
      //       isSubmitButtonBumping={this.state.isSubmitButtonBumping}
      //       SubmitOnClick={this.showSummary}
      //       cost={this.state.prices.total}
      //     />
      //   </OrderedGoods.Provider>
      // </div>
      //   } : <StartPage onClick={this.startApplication} />
      // }
    );
  }
}

export default Layout;
