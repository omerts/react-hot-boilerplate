import React, { Component } from 'react';

class Test extends Component {
  render() {
    return <div>Hello</div>
  }
}

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    console.log('pure (or not)')

    return true
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <Test />
      </div>
   );
  }
}

