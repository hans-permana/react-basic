import React from 'react';

class ExpenseList extends React.Component {
    constructor() {
        super();
        this.renderExpense = this.renderExpense.bind(this);
    }

    renderExpense() {
        console.log(this.props);
        return (
            <div>
                {this.props.expenses.map((expense, i) => <p key={i}>
                    <strong>{expense.description}</strong> €{expense.amount} {expense.date}
                    <button onClick={this.props.removeExpense.bind(null, i)}>X</button>
                </p>)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderExpense()}
            </div>
        )
    }
}

export default ExpenseList;