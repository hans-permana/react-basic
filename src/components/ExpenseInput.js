import React from 'react';
import dateFormat from 'dateformat';

class ExpenseInput extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const description = this.refs.description.value;
        const amount = this.refs.amount.value;
        if (description && amount) {
            const newExpense = {
                description: description,
                amount: amount,
                date: dateFormat(new Date(), "dd mmmm yyyy, HH:MM:ss")
            };
            this.props.addExpense(newExpense);
        }
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