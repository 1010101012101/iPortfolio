import 'styling/semantic.less'

import React, { Component } from 'react';

import Router from './components/Router/router';
class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}



export default App;