import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Button } from 'rmwc';

import './style.css';

import { setView, setDrawer } from '../../actions/view';
import { PrimaryButton } from '../../components/Buttons';

const mapStateToProps = (state) => ({
  isDrawerOpen: state.view.isDrawerOpen,
});

const mapStateToDispatch = {
  goHome: () => setView('home'),
  goLetters: () => setView('letters'),
  goCountdown: () => setView('countdown'),
  closeDrawer: () => setDrawer(false),
};

const WithSideDrawer = ({ children, isDrawerOpen, goHome, goLetters, closeDrawer, goCountdown }) => (
  <div className={cx('withSideDrawer--root', { 'withSideDrawer--open': isDrawerOpen })}>
    <div className="withSideDrawer--drawer">
      <Button stroked onClick={goHome}>Home</Button>
      <Button stroked onClick={goLetters}>Letters</Button>
      <Button stroked onClick={goCountdown}>Countdown</Button>
      <Button stroked>Easy Peasy</Button>
    </div>
    <div onClick={() => isDrawerOpen && closeDrawer()} className="withSideDrawer--content">
      {children}
    </div>
  </div>
);

export default connect(mapStateToProps, mapStateToDispatch)(WithSideDrawer);
