import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Expense from './components/Expense';
import Expenses from './components/Expenses';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/expenses/:userEmail" component={Expenses} />
        <Route path="/expense/:id" component={Expense} />
      </Router>
    );
  }
}

export default App;