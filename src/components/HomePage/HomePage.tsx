import React from 'react';

import TransactionListsWrapper from './TransactionListsWrapper';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                <TransactionListsWrapper />
            </div>
        )
    }
}

export default HomePage;