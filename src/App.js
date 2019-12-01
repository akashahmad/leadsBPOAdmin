import React, {useEffect, useState} from "react";
// import Routes from "./Routes";
import {withRouter} from "react-router-dom";

export default () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        let loggedIn = localStorage.getItem("token");
        if (!loggedIn) {
            window.location.replace('/login');
        } else {
            setLoader(true)
        }
    }, []);

    const logout =()=>{
      localStorage.removeItem("token");
      window.location.replace('/login');
    };

    return (
        <div>
            {loader ? <div>
                <h1>Welcome</h1>
                <button onClick={()=>logout()}>Log out</button>
            </div> :
                <h1>Loader ...</h1>}
        </div>
    )
}

// {/*<Routes/>*/}