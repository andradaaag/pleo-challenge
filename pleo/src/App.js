import React, { Component } from 'react';
import Expense from './components/Expense';
import Expenses from './components/Expenses';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    expenses: [
      {
        id: '5b995dff2e3cb74644948a66',
        amount: {
          value: '2149.29',
          currency: 'GBP'
        },
        date: '2017-06-21T08:45:09.326Z',
        merchant: 'QUONK',
        receipts: [],
        comment: '',
        category: '',
        user: {
          first: 'Atkins',
          last: 'Blackburn',
          email: 'atkins.blackburn@pleo.io'
        }
      },
      {
        id: '5b995dffdeec40464bd614bf',
        amount: {
          value: '731.92',
          currency: 'EUR'
        },
        date: '2017-05-30T14:12:31.054Z',
        merchant: 'WRAPTURE',
        receipts: [],
        comment: '',
        category: '',
        user: {
          first: 'Barbara',
          last: 'Downs',
          email: 'barbara.downs@pleo.io'
        }
      }
    ]
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={() =>
          <Expenses expenses={this.state.expenses} />
        } />
        <Route path="/expense/:id" component={Expense} />
      </Router>
    );
  }
}

export default App;