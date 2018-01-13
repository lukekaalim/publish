import React from 'react';
import './style.css';

const ANIMATION_DELAY = 0.1;

const ToolBar = ({ tools }) => (
  <div className="toolBar--root">
    {tools.map((tool, index) => (
      <div
        className="toolBar--toolRoot"
        style={{ animationDelay: `${index * ANIMATION_DELAY}s`}}
        >
        {tool}
      </div>
    ) )}
  </div>
);

export default ToolBar;
