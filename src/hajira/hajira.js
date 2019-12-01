import React, {useEffect} from "react";
import Routes from "./Routes";
import {withRouter} from "react-router-dom";

export default () => {
    useEffect(() => {
        let loggedIn = localStorage.getItem("token");
        if (!loggedIn) {
            localStorage.setItem("route", this.props.location.pathname);
            this.props.history.push('/login');
        }
    });
    return (
        <Routes/>
    )
}
