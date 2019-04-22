import React, { FormEvent } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { addTransaction } from '../store/TransactionActions';
import { TransactionType } from '../store/types';

interface IProps {
    dispatch: Redux.Dispatch,
    type: TransactionType
}

interface IState {
    description: string,
    amount: string
}

class AddTransactionForm extends React.Component<IProps, {}> {
    state: IState = {
        description: '',
        amount: ''
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

        if (!isNaN(amount) && amount != 0) {
            this.props.dispatch(addTransaction(this.props.type, this.state.description, amount));
            this.reset();
        }


    }

    reset = () => {
        this.setState({
            description: '',
            amount: ''
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
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
                        placeholder="Amount"
                        onChange={this.handleInputChange}
                        value={this.state.amount} 
                    />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default connect()(AddTransactionForm);