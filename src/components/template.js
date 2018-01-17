import React from 'react';
import { Select } from 'rmwc/Select';
import { TextField } from 'rmwc/TextField';

const text = (template, props) => (
  <TextField
    {...props}
    value={props.value || ''}
    box
    label={template.label}
    key={template.key}
  />
);

const enumerable = (template, props) => (
  <Select
    {...props}
    value={props.value || ''}
    options={template.values}
    key={template.key}
    label={template.label}
  />
);


const DEFAULT_MAP = {
  text,
  enum: enumerable,
};

const Template = ({ templates, data, map = DEFAULT_MAP, ...props }) => (
  templates.map(template => map[template.type](template, {
    ...props,
    value: data[template.key],
    onChange: (event) => props.edit && props.edit(template.key, event.target.value),
    edit: undefined,
  }))
);

export default Template;
