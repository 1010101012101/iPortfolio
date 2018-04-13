import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import './styling/hover/hover.less';
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);
/* eslint-disable */
if (process.env.NODE_ENV === 'development' && module.hot) {
  /* eslint-enable */
  module.hot.accept('./App', () => { render(App); });
}
