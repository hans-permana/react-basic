function expenses(state = [], action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log("inside action", state, action);
            return [...state,
                action.expense];

        default:
            return state;
    }
}

export default expenses;