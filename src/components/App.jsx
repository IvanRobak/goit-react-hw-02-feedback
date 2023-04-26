import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
export default App;
