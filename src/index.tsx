import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reducer from './store/reducers/expensesReducer';
import { addExpense } from './store/ExpenseActions';

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(addExpense('Gas Bill', 200));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
