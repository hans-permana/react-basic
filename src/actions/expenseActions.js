export function addExpense(expense) {
    console.log("adding expense", expense);
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export function removeExpense(expense, i) {
    console.log("remove expense", expense);
}