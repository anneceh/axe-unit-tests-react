import React, { Component } from 'react';
import Form from './Form';

class Subtract extends Component {
  render() {
    return (
        <div>
          <h1>Subtract Function</h1>
          <Form operator='-'/>
        </div>
    );
  }
}

export default Subtract;
