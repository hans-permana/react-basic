import React from 'react';
import {render} from 'react-dom';

import ExpenseInput from './ExpenseInput';

class App extends React.Component {
    render() {
        return (
            <div>
                <ExpenseInput/>
            </div>
        )
    }
}

export default App;