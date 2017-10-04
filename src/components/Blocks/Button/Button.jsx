import React from 'react';

const Button = (props) => {
  return (
    <div
      className="submit-button"
      onClick={ props.onClick }
    />
  )
}

export default Button;