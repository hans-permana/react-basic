function expenses(state = [], action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,
                action.expense];

        case 'DELETE_EXPENSE':
            const i = action.index;
            return [
                ...state.slice(0, i),
                ...state.slice(i + 1)
            ];

        default:
            return state;
    }
}

export default expenses;