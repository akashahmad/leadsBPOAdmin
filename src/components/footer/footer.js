import React from 'react'
import Logo from '../../asserts/images/newLogo.png'
import Style from './style'
// import {Link} from 'react-router-dom'

export default ()=>{
    return(
        <div className="container-fluid footer-background">
               <div className="row">
                <img className="mt-5" src={Logo} style={{ width:"200px", marginTop:"20px"}}></img>
               </div> 

               <div className="footer-last-sectiondata">
                    <div className="last-section-paragraph-footer">
                        <p>Copyright 2019 debtexpertuk.netlify.com All Rights Reserved.</p>
                        <p>debtexpertuk.netlify.com is a trading style of Money Tree Media Limited.</p>
                        <p className="last-pargraph-width">We will never charge you any fees for using the services on this site whatsoever. Therefore as an introducer we may receive a commission from our selected partners whom you may be referred to.</p>
                    </div>
               </div> 

               <div className="lists-footer-lastsection">
                   <li><a>Contact Details</a></li>
                   <li><a>Website Copyright Details</a></li>
                   <li><a>Terms &amp; Conditions</a></li>
                   <li>
                       {/*<Link to={'/privacy-policy'} >*/}
                           Privacy Policy
                       {/*</Link>*/}
                   </li>
               </div>


        <Style/>
        </div>
    );

}