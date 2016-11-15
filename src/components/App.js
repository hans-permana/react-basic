import React from 'react';
import {render} from 'react-dom';

import ExpenseInput from './ExpenseInput';
import ExpenseList from './ExpenseList';

class App extends React.Component {
    render() {
        return (
            <div>
                <ExpenseInput/>
                <ExpenseList/>
            </div>
        )
    }
}

export default App;