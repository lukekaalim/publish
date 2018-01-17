// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { retrieveLocalStorage } from './lib/localstorage';

import Topbar from './components/Topbar';
import NavigationDrawer from './components/NavigationDrawer';

import 'material-components-web/dist/material-components-web.css';

import reducers from './reducers';
import saveLocal from './middleware/saveLocal';
import trackEdits from './middleware/trackEdits';
import Views from './views';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  saveLocal,
  trackEdits,
];

const store = createStore(
  reducers,
  retrieveLocalStorage(),
  composeEnhancers(applyMiddleware(...middleware)),
);

class App extends Component {

  componentDidMount() {
    console.log('Application Mounted');
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Topbar />
          <NavigationDrawer />
          <Views />
        </div>
      </Provider>
    );
  }
}

export default App;
