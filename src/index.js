import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import { Provider } from './store';
ReactDOM.render(<div>
    <Provider><Main /></Provider>
</div> , document.getElementById('root'));
