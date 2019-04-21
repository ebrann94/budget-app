import React, { FormEvent } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { addTransaction } from '../store/TransactionActions';
import { isNumber } from 'util';

interface IProps {
    dispatch: Redux.Dispatch
}

interface IState {
    description: string,
    amount: string,
    type: string
}

class AddTransactionPage extends React.Component<IProps, {}> {
    state: IState = {
        description: '',
        amount: '',
        type: 'inc'
    }
    
    handleInputChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        const value: any = target.value;

        this.setState({
            [name]: value
        });
    }

    handleAddExpense = (e: FormEvent) => {
        e.preventDefault();

        const amount = Number(this.state.amount);

        if (isNumber(amount) && amount != 0) {
            this.props.dispatch(addTransaction(this.state.type, this.state.description, amount));
        }


    }

    reset = () => {
        this.setState({
            description: '',
            amount: '',
            type: 'inc'
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Add Expense Page</h1>
                <form onSubmit={this.handleAddExpense}>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        onChange={this.handleInputChange}
                        value={this.state.description}
                    />
                    <input 
                        type="number" 
                        name="amount" 
                        onChange={this.handleInputChange}
                        value={this.state.amount} 
                    />
                    <select 
                        name="type"
                        onChange={this.handleInputChange}
                        value={this.state.type}
                    >
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