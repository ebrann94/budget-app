import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import AddExpensePage from './components/AddExpensePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/add-expense" component={AddExpensePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
