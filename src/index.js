import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import { Provier } from './store';
ReactDOM.render(<div>
    <Provier><Main /></Provier>
</div> , document.getElementById('root'));
