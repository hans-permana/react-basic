import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ExpenseInput from './ExpenseInput';
import ExpenseList from './ExpenseList';

import * as actions from '../actions/expenseActions';

class App extends React.Component {
    render() {
        return (
            <div>
                <ExpenseInput/>
                <ExpenseList {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);