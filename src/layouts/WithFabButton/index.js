import React from 'react';
import { Fab } from 'rmwc';

import './style.css';

const WithFabButton = ({ content, button, buttonProps }) => (
  <div className="withFabButton--root">
    <div className="withFabButton--content">
      {content}
    </div>
    <div className="withFabButton--button">
      <Fab {...buttonProps} />
    </div>
  </div>
);

export default WithFabButton;
