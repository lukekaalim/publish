import React from 'react';
import { connect } from 'react-redux';

import { editTest } from '../actions/test';
import Template from '../components/template';

const mapStateToProps = (state) => ({
  test: state.test,
});

const mapDispatchToProps = {
  editTest,
};

const templates = [
  { type: 'text', key: 'homeYtURL', label: 'Url for Homepage\'s background YouTube video' },
  { type: 'color', key: 'bgColor', label: 'Background Color for Site' },
];

const Test = ({ test, editTest }) => (
  <div className="narrowCenteredContent">
    <pre>
    {JSON.stringify(test, null, 3)}
    </pre>
    <Template
      templates={templates}
      data={test}
      className="maxWidth"
      edit={editTest}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
