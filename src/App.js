import React, {useEffect, useState} from "react";
// import Routes from "./Routes";
import {withRouter} from "react-router-dom";
//import Loader from "react-loader-spinner";
//import ReactDOM from 'react-dom';
import Tab from './components/Table3/table2'
import { Roller } from 'react-awesome-spinners'
export default () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        let loggedIn = localStorage.getItem("token");
        if (!loggedIn) {
            window.location.replace('/login');
        }
        else {
            setLoader(true)
        }
    }, []);

    const logout =()=>{
      localStorage.removeItem("token");
      window.location.replace('/login');
      setLoader(true);
    };

    return (
            <div>
                {loader ? <div>
                    <button onClick={()=>logout()} style={{position: "absolute",padding: "9px",marginLeft: "1132px",
                        width: "87px"}}>Logout</button>
                    <Tab/>
                   </div> : <div style={{marginLeft: "50%",marginTop: "20%"}}> {<Roller/> } </div> }

            </div>

    )
}
