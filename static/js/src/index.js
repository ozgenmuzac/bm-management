import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainStore from './main-store';

ReactDOM.render(
    (
        <App store={ new MainStore() } />
    ),
    document.getElementById('app-entry'));
