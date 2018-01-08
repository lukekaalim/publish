import React from 'react';
import { connect } from 'react-redux';

import { ALL_VIEWS } from '../reducers/view';

import Home from './home';
import Contacts from './contacts';
import Countdown from './countdown';
import Site from './site';
import Sessions from './sessions';

const mapStateToProps = (state) => ({
  currentView: ALL_VIEWS[state.view.index],
});

const Views = ({ currentView }) => {
  switch(currentView) {
    case 'meta':
      return <Countdown />;
    case 'contacts':
      return <Contacts />;
    case 'sessions':
      return <Sessions />;
    case 'site':
      return <Site />;
    case 'home':
      return <Home />;
    default:
      return <h2>Error, page not found</h2>
  }
}

export default connect(mapStateToProps)(Views);
