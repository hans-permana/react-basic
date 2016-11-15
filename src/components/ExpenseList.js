import React from 'react';

import expenses from '../data/expenses';

class ExpenseList extends React.Component {
    constructor() {
        super();
        this.state = {
            expenses: expenses
        };
    }

    renderExpense(expense, i) {
        return (
            <div key={i}>
                <p>
                    <strong>{expense.description}</strong> €{expense.amount} {expense.date}
                </p>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.expenses.map(this.renderExpense)}
            </div>
        )
    }
}

export default ExpenseList;