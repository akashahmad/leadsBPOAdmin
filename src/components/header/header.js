import React from 'react'
import img from '../../asserts/images/newLogo.png'
import Style from '../header/style'
import smallIcon from '../../asserts/images/Group3.png'
//import {Link} from 'react-router-dom'
export default ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row section1-row d-flex justify-content-around">

                {/*<Link to={'/'}>*/}
                    <img className="headerLogo" src={img} width="220px" height="100px" alt="logo" />
                {/*</Link>*/}
                <div className="d-flex justify-content-between header">
                    <div className="d-flex flex-column align-items-end content">
                        <div className="section1-paragraph">
                            <h4 className="paragragh1-section1">Contact for Support: </h4>
                            <a className="anchor-section1">
                                {/*<Link to={'/help'}>*/}
                                    Debt Expert UK
                                {/*</Link>*/}
                            </a>
                            {/*<Link to={'/contact-form'}>*/}
                            <div>
                                <button className="scroll_btn pulse  animated infinite pulse button-section2-header clip-div1 d-flex mt-4" id="clip-div1"><span className="button-header-text">Contact Us</span>
                                    <img src={smallIcon} width="20px" className="mt-2 ml-3"></img></button>
                            </div>
                            {/*</Link>*/}
                        </div>
                        <p className=" link-header">debtexpertuk.netlify.com</p>
                    </div>


                </div>

            </div>

        </div>
        <Style/>
        </>
    );
}