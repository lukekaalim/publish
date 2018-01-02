import React from 'react';
import { connect } from 'react-redux';

const Countdown = () => (
  <div>
    <form>
      <label></label>
      <select>
        <option>one</option>
        <option>twp</option>
        <option>three</option>
      </select>
    </form>
  </div>
);

export default connect()(Countdown);
