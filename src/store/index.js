import React, {Component} from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type){
        case 'SET_WORD':
            return {...state, word:  action.payLoad};
        default:
            return state;
    }
};

export class Provier extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action));
        },
        word:[],
    };
    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const Consumer = Context.Consumer;