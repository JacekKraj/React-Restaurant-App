import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import StartPage from './containers/StartPage/StartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={StartPage} />
        <Route path="/dishcard" component={Layout} />
      </div>
    );
  }
}

export default App;
