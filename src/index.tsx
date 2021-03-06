import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reducer from './store/reducers/transactionsReducer';
import { addTransaction } from './store/TransactionActions';

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(addTransaction('out', 'Gas Bill', 200));
store.dispatch(addTransaction('inc', 'Wage', 1500));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));