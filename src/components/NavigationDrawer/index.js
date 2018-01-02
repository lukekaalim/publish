import React from 'react';
import { connect } from 'react-redux';
import {
  TemporaryDrawer,
  TemporaryDrawerHeader,
  TemporaryDrawerContent,
} from 'rmwc/Drawer';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';
import { Theme } from 'rmwc/Theme';
//import './style.css';

import { ALL_VIEWS } from '../../reducers/view';
import { setDrawerOpen, switchIndex } from '../../actions/view';

const mapStateToProps = (state) => ({
  isDrawOpen: state.view.isDrawOpen,
  gameName: state.game.meta.name,
});

const mapDispatchToProps = {
  closeDrawer: () => setDrawerOpen(false),
  switchIndex,
}

const NavigationDrawer = ({
  isDrawOpen,
  closeDrawer,
  gameName,
  switchIndex,
}) => (
  <TemporaryDrawer
    open={isDrawOpen}
    onClose={closeDrawer}
  >
    <Theme use={'primary-dark-bg text-primary-on-primary'}>
      <TemporaryDrawerHeader>
        {gameName}
      </TemporaryDrawerHeader>
		</Theme>

    <TemporaryDrawerContent>
      {
        ALL_VIEWS.map((view, index) => (
          <ListItem
            key={view}
            onClick={() => {
              switchIndex(index);
              closeDrawer();
            }}
          >
            <ListItemText
              style={{ textTransform: 'Capitalize'}}
            >
              {view}
            </ListItemText>
          </ListItem>
        ))
      }
    </TemporaryDrawerContent>
  </TemporaryDrawer>
);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
