import React from 'react';
import { connect } from 'react-redux';

import { TextField, TextFieldIcon } from 'rmwc/TextField';

import '../layouts/style.css';
import '../components/style.css';

import { editSecret, editID } from '../actions/auth';

import VerticalSpacer from '../components/VerticalSpacer';

const mapStateToProps = (state) => ({
  authSecret: state.auth.secret,
  authID: state.auth.id,
  authBucket: state.auth.bucket,
  bucketName: state.config.bucketName,
});

const mapDispatchToProps = {
  editSecret,
  editID,
};

const Config = ({
  authBucket,
  authSecret,
  authID,
  editID,
  editSecret,
  bucketName,
}) => (
  <div className="narrowCenteredContent">
    <h2>Configure the Details of the Site</h2>
    <h3>Bucket Details</h3>
    <p>This website links and communicates to an <strong>AWS Bucket</strong></p>
    <TextField
      label="Bucket URL"
      value={bucketName}
      className="maxWidth"
      box
      disabled
      withTrailingIcon={<TextFieldIcon use="lock"/>}
    />
    <h3>Authentication</h3>
    <p>You need to have a valid AWS <strong>ID</strong> and <strong>SECRET </strong>
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
    <VerticalSpacer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Config);
