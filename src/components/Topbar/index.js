import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarRow, ToolbarTitle, ToolbarMenuIcon, ToolbarFixedAdjust } from 'rmwc/Toolbar';
import './style.css';

import { setDrawerOpen } from '../../actions/view';

const mapStateToProps = (state) => ({
  gameName: state.game.meta.name,
});

const mapDispatchToProps = {
  openDrawer: () => setDrawerOpen(true),
};

const Topbar = ({ openDrawer, gameName }) => (
  <span>
    <Toolbar fixed waterfall>
    	<ToolbarRow>
        <ToolbarMenuIcon use="menu" onClick={openDrawer}/>
    		<ToolbarTitle>{gameName}</ToolbarTitle>
    	</ToolbarRow>
    </Toolbar>
    <ToolbarFixedAdjust/>
    <div style={{ overflow: 'hidden', height: '0px', width: '0px', }}>.</div>
  </span>
);

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
