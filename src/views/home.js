import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

import '../layouts/style.css';
import '../components/style.css';

import { editName } from '../actions/game/meta';
import { editSecret, editID } from '../actions/auth';

import WithPublish from '../connectors/withPublish';
import WithLocalSave from '../connectors/withLocalSave';
import VerticalSpacer from '../components/VerticalSpacer';

const mapDispatchToProps = {
  editName,
  editSecret,
  editID,
};

const mapStateToProps = (state) => ({
  gameName: state.game.meta.name,
  authSecret: state.auth.secret,
  authID: state.auth.id,
  changes: state.dirty,
});

const Home = ({
  gameName,
  authSecret,
  authID,
  editName,
  editSecret,
  editID,
  changes,
}) => (
  <div className="narrowCenteredContent">
    <h2>Organize your Campaign!</h2>
    <h3>Meta Info</h3>
    <p>Edit the text that is used as your campaign name on your website.
    </p>
    <TextField
      label="Your Campaign's name"
      value={gameName}
      className="maxWidth"
      onChange={event => editName(event.target.value)}
    />
    <h3>Publish</h3>
    <p>Your changes here will only save locally, press the button below to
    upload your changes to the website so all your players can see them!</p>
    <p style={{ color: 'grey' }}>You have {changes} unsaved changes</p>
    <WithPublish render={publish => (
      <Button raised onClick={publish}>
        Publish to Live Site
      </Button>
    )}/>
    <p>Additionally, you can save all of your changes to a
    local <strong>'.json'</strong> file.</p>
    <WithLocalSave render={save => (
      <Button stroked onClick={save}>
        Publish Locally to JSON
      </Button>
    )}/>
    <VerticalSpacer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
