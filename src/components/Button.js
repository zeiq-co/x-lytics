import React from 'react';

const Button = ({ children, isFullwidth, ...otherProps }) => {
  return (
    <button
      className={`button is-primary is-large is-rounded has-text-weight-medium is-size-5 ${
        isFullwidth ? 'is-fullwidth' : ''
      }`}
      type="button"
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
