import React from 'react';
import { connect } from 'react-redux';

import { Select } from 'rmwc/Select';
import Switch from 'rmwc/Checkbox';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';

import {
  LANDING_MODES,
  subtitle,
  title,
  useGameNameAsTitle,
} from '../reducers/game/site';

import { setLandingMode } from '../actions/game/site';

import '../layouts/style.css';

const mapStateToProps = (state) => ({
  gameName: state.game.meta.name,
  landingMode: state.game.site.landingMode,
  useGameNameAsTitle: state.game.site.useGameNameAsTitle,
  title: state.game.site.title,
  subtitle: state.game.site.subtitle,
});

const mapDispatchToProps = {
  setLandingMode,
  setUseGameNameAsTitle: useGameNameAsTitle.edit,
  editSubtitle: subtitle.edit,
  editTitle: title.edit,
};

const Site = ({
  setLandingMode,
  landingMode,
  gameName,
  title,
  useGameNameAsTitle,
  setUseGameNameAsTitle,
  editSubtitle,
  editTitle,
  subtitle,
}) => (
  <div className="narrowCenteredContent">
    <h2>Site Settings</h2>
    <Select
      className="maxWidth"
      value={landingMode}
      label="Landing Mode"
      onChange={event => setLandingMode(event.target.value)}
      options={LANDING_MODES.map((label, value) => ({ label, value }) )}
    />
    <Switch
      className="maxWidth"
      label="Use Game Name as Title"
      checked={useGameNameAsTitle}
      onChange={event => setUseGameNameAsTitle(event.target.checked)}
    />
    <TextField
      className="maxWidth"
      label="Title"
      box
      value={useGameNameAsTitle ? gameName : title}
      withTrailingIcon={useGameNameAsTitle && <TextFieldIcon use="lock"/>}
      disabled={useGameNameAsTitle}
      onChange={event => editTitle(event.target.value)}

    />
    <TextField
      box
      value={subtitle}
      className="maxWidth"
      label="Subtitle"
      onChange={event => editSubtitle(event.target.value)}
    />
    <TextFieldHelperText>Optional</TextFieldHelperText>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Site);
