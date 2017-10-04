import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input
        value={ this.props.value }
        onChange={ (event) => this.props.onChange(event.target.value) }
      />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func
};

export default Input;