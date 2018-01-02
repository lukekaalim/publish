import React from 'react';
import { connect } from 'react-redux';

import { ALL_VIEWS } from '../reducers/view';

import Home from './home';
import Contacts from './contacts';
import Countdown from './countdown';

const mapStateToProps = (state) => ({
  currentView: ALL_VIEWS[state.view.index],
});

const Views = ({ currentView }) => {
  switch(currentView) {
    case 'meta':
      return <Countdown />;
    case 'contacts':
      return <Contacts />;
    case 'home':
    default:
      return <Home />;
  }
}

export default connect(mapStateToProps)(Views);
