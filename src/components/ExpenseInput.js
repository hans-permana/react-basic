import React from 'react';

class ExpenseInput extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const newExpense = {
            description: this.refs.description.value,
            amount: this.refs.amount.value
        };
        this.props.addExpense(newExpense);
        this.refs.description.focus();
        this.refs.expenseForm.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} ref="expenseForm">
                <input type="text"
                       placeholder="Expense detail"
                       ref="description"
                />
                <input type="text"
                       placeholder="Amount"
                       ref="amount"
                />
                <button type="submit">+</button>
            </form>
        )
    }
}

export default ExpenseInput;