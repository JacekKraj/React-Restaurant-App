import React, { Component } from 'react';
import styles from './StartPage.module.css';
import cx from 'classnames';
import logo from '../../assets/color/chef.jpg';

class StartPage extends Component {
  state = {
    growNow: false,
    isMounted: false
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        return { growNow: !prevState.growNow };
      });
      this.setState({ isMounted: true });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const classes = cx(styles.tap, {
      [styles.grow]: this.state.growNow
    });

    return (
      <div className={styles.StartPage} onClick={this.props.onClick}>
        <h1>Eat, Sweet and Drink Restaurant</h1>
        <img src={logo} alt="" />
        <div className={styles.bottom}>
          <span className={classes}>Tap to start...</span>
        </div>
      </div>
    );
  }
}

export default StartPage;
