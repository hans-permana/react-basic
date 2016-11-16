export function addExpense(expense) {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export function removeExpense(index) {
    return {
        type: 'DELETE_EXPENSE',
        index
    }
}