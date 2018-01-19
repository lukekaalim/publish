import React from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarFixedAdjust,
  ToolbarSection,
} from 'rmwc/Toolbar';
import './style.css';

import { resetGame } from '../../actions/game';
import { clealLocalStorage } from '../../lib/localstorage';

import { setDrawerOpen } from '../../actions/view';

const mapStateToProps = (state) => ({
  gameName: state.game.meta.name,
  edits: state.dirty,
});

const mapDispatchToProps = {
  openDrawer: () => setDrawerOpen(true),
  resetGame,
};

const Topbar = ({ openDrawer, gameName, edits, resetGame }) => (
  <span>
    <Toolbar fixed waterfall>
    	<ToolbarRow>
        <ToolbarSection alignStart>
          <ToolbarMenuIcon use="menu" onClick={openDrawer}/>
      		<ToolbarTitle>{gameName}</ToolbarTitle>
        </ToolbarSection>
        <ToolbarSection alignEnd>
          <div>Edits: {edits}</div>
          <ToolbarMenuIcon
            use="delete_forever"
            onClick={clealLocalStorage}
          />
          <ToolbarMenuIcon
            use="delete"
            onClick={resetGame}
          />
        </ToolbarSection>
    	</ToolbarRow>
    </Toolbar>
    <ToolbarFixedAdjust/>
    <div style={{ overflow: 'hidden', height: '0px', width: '0px', }}>.</div>
  </span>
);

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
