import {apiPath} from '../../config'
import React, {useState, useEffect}  from 'react';
import Style from './style'
import axios from 'axios';
export default() => {
    const [loader, setLoader] = useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const userAuthentication = e => {
        e.preventDefault();
        let payLoad = {email: mail, password: password};
        axios.post(apiPath + "/api/login", payLoad)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                setPassword("");
                setMail("");
                window.location.replace("/");
            })
            .catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setError("Invalid Password");
                }
                else if (err.message === "Request failed with status code 500")
                {
                    setError("Email does not exist");
                }
            });
    };

    useEffect(() => {
        let loggedIn = localStorage.getItem("token");
        if (loggedIn) {
            window.location.replace('/');
        }else {
            setLoader(true)
        }
    }, []);

    return (
        <>
        {
            !loader ? <h1>Loader ...</h1> :
                <div className="login">
                    <div className="site-inner">
                        <form className="head" onSubmit={(event) => {
                            userAuthentication(event)
                        }}>
                            <div className="">
                                <div id="" className="inside-form">
                                    <div >
                                        <h2 style={{color: "#006a90", padding: "2px"}}>LOGIN</h2>
                                    </div>

                                    <div style={{margin: "24px"}} className="">
                                        <label style={{marginLeft: " -272px"}}>Email
                                            <span className="">*</span>
                                        </label>
                                        <div className="">
                                            <input
                                                type="email" placeholder="  Email" className="fields"
                                                name='email'
                                                value={mail}
                                                onChange={(event) => setMail(event.target.value)}
                                                pattern='[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}'
                                                title="for example: abc@gmail.com" required/>

                                        </div>
                                    </div>

                                    <div className="">
                                        <label className="label">Password
                                            <span className="">*</span>
                                        </label>
                                        <div className="">
                                            <input
                                                type="password" placeholder="  Password" className="fields"
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}
                                                required/>

                                        </div>
                                    </div>
                                    <div style={{color: "red"}}>{error}</div>
                                    <div className="d-flex">
                                        <p className="sub-input" style={{color: "#035F80"}}>
                                            Forget Password
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 head">
                                <div>
                                    <button className="btn_submit" type="submit">Log In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        }
        <Style/>
        </>);
}