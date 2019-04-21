import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import AddExpensePage from './components/AddExpensePage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpensePage />
        <HomePage />
      </div>
    );
  }
}

export default App;
