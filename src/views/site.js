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
  landingMode,
} from '../reducers/game/site';
import { passTargetValue, passTargetChecked } from '../lib/forms';

import '../layouts/style.css';

const mapStateToProps = (state) => ({
  gameName: state.game.meta.name,
  landingMode: state.game.site.landingMode,
  useGameNameAsTitle: state.game.site.useGameNameAsTitle,
  title: state.game.site.title,
  subtitle: state.game.site.subtitle,
});

const mapDispatchToProps = {
  setLandingMode: landingMode.edit,
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
      onChange={passTargetValue(setLandingMode)}
      options={LANDING_MODES.map((label, value) => ({ label, value }) )}
    />
    <Switch
      className="maxWidth"
      label="Use Game Name as Title"
      checked={useGameNameAsTitle}
      onChange={passTargetChecked(setUseGameNameAsTitle)}
    />
    <TextField
      className="maxWidth"
      label="Title"
      box
      value={useGameNameAsTitle ? gameName : title}
      withTrailingIcon={useGameNameAsTitle && <TextFieldIcon use="lock"/>}
      disabled={useGameNameAsTitle}
      onChange={passTargetValue(editTitle)}
    />
    <TextField
      box
      value={subtitle}
      className="maxWidth"
      label="Subtitle"
      onChange={passTargetValue(editSubtitle)}
    />
    <TextFieldHelperText>Optional</TextFieldHelperText>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Site);
