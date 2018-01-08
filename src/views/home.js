import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

import '../layouts/style.css';
import '../components/style.css';

import { editName } from '../actions/game/meta';
import { editSecret, editID } from '../actions/auth';

import WithPublish from '../connectors/withPublish';
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
    <h3>Authentication</h3>
    <p>You need to have a valid <strong>ID</strong> and <strong>SECRET </strong>
    to upload data to the website. Contact your website's administator if you
    dont have or don't know what these are. </p>
    <TextField
      label="Your ID"
      value={authID}
      className="maxWidth"
      onChange={event => editID(event.target.value)}
    />
    <TextField
      label="Your Secret"
      value={authSecret}
      className="maxWidth"
      onChange={event => editSecret(event.target.value)}
    />
    <h3>Publish</h3>
    <p>Your changes here will only save locally, press the button below to
    upload your changes to the website so all your players can see them!</p>
    <p style={{ color: 'grey' }}>You have {changes} unsaved changes</p>
    <WithPublish render={publish => (
      <Button raised onClick={publish}>Publish to Live</Button>
    )}/>
    <VerticalSpacer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
