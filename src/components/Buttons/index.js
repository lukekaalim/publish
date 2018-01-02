import React from 'react';
import cx from 'classnames';

import './style.css';

const buildButtonVariant = (variantName) => ({ ...props, children }) => (
  <button
    type="button"
    {...props}
    className={cx(
      props.className,
      variantName,
      'standardButton',
    )}
  >
    {children}
  </button>
);

const PrimaryButton = buildButtonVariant('standardButton--primary');
const MenuButton = buildButtonVariant('standardButton--menu');
const UnderlineButton = buildButtonVariant('standardButton--underline');

export {
  PrimaryButton,
  MenuButton,
  UnderlineButton,
};
