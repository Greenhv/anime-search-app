import React from 'react';
import PropTypes from 'prop-types';

function Input({
  className,
  ...props,
}) {
  return (
    <input className={`input ${className}`} {...props} />
  );
};

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
