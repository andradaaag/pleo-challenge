import React, { Component } from 'react';
import Expense from './components/Expense';
import Expenses from './components/Expenses';

class App extends Component {
  state = {
    expense: {
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
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Expense expense={this.state.expense} /> */}
        <Expenses expenses={[this.state.expense, this.state.expense]}/>
      </div>
    );
  }
}

export default App;