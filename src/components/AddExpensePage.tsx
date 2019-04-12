import React, {FormEvent, ChangeEvent} from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../store/TransactionActions';
import Redux from 'redux';

interface props {
    dispatch: Redux.Dispatch
}

interface state {
    description: string,
    amount: number
}

class AddTransactionPage extends React.Component<props, {}> {
    state: state = {
        description: '',
        amount: 0
    }
    
    handleInputChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        const value = target.value

        this.setState({
            [name]: value
        });
    }

    handleAddExpense = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const type = target.type.value;

        this.props.dispatch(addTransaction(type, this.state.description, this.state.amount));
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Add Expense Page</h1>
                <form onSubmit={this.handleAddExpense}>
                    <input type="text" name="description" onChange={this.handleInputChange}/>
                    <input type="number" name="amount" onChange={this.handleInputChange} />
                    <select name="type">
                        <option value="inc">Income</option>
                        <option value="out">Outgoing</option>
                    </select>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default connect()(AddTransactionPage);