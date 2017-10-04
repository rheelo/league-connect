import React from 'react';
import axios from 'axios';
import Input from '../Blocks/Input/Input';
import Button from '../Blocks/Button/Button';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onSubmit() {
    return axios.get(`/summoner/${this.state.value}`).then((item) => {
      console.log(item);
    }).catch((error) => {
      console.log(error);
    });
  }
  onChange(value) {
    this.setState({ value })
  }
  render() {
    return (
      <div>
        <Input onChange={ (value) => this.onChange(value) } />
        <Button onClick={ () => this.onSubmit() } />
        <div className="main-body">The Body</div>
      </div>
    )
  }
}

export default Body;