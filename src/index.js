import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';

import store from './store';

let dom = (
    <Provider store={store}>
        <App/>
    </Provider>);

render(dom, document.getElementById('root'));
