import React, { Component } from 'react';
import Expense from './components/Expense';
import Expenses from './components/Expenses';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Expenses} />
        <Route path="/expense/:id" component={Expense} />
      </Router>
    );
  }
}

export default App;