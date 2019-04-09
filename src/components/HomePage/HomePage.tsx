import React from 'react';

import TransactionList from './TransactionList';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                <TransactionList type="inc" />
                <TransactionList type="out" />
            </div>
        )
    }
}

export default HomePage;