import React from 'react';
import { connect } from 'react-redux';

interface props {}

interface state {
    description: string,
    amount: number
}

class AddExpensePage extends React.Component {
    constructor(props: props) {
        super(props);

        this.state = {
            description: '',
            amount: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Add Expense Page</h1>
            </div>
        )
    }
}

export default connect()(AddExpensePage);