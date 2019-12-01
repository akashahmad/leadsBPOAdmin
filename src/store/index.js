import React, {Component} from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type){
        case 'Token':
            console.log(localStorage.setItem("Token", action.payLoad));
            return {...state, Token:  action.payLoad};
        default:
            return state;
    }

};

export class Provider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action));
        },
        Token: localStorage.getItem("Token")?localStorage.getItem("Token"):""

    };
    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const Consumer = Context.Consumer;