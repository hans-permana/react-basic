import React from 'react';

class ExpenseList extends React.Component {
    constructor() {
        super();
        this.renderExpense = this.renderExpense.bind(this);
    }

    renderExpense() {
        return (
            <div className="pt-running-text">
                {this.props.expenses.map((expense, i) => <p key={i}>
                    <strong>{expense.description}</strong> €{expense.amount} {expense.date}
                    <button className="pt-button pt-intent-danger pt-icon-delete" onClick={this.props.removeExpense.bind(null, i)}/>
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