import React, {FormEvent, ChangeEvent} from 'react';
import { connect } from 'react-redux';
import { addIncome } from '../store/ExpenseActions';
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
        this.props.dispatch(addIncome(this.state.description, this.state.amount));
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
                    <input type="submit" value="Add Expense" />
                </form>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
//     return {
//         addExpense: dispatch(addExpense(null, null))
//     }
// }

export default connect()(AddTransactionPage);