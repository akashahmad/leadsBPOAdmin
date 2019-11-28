import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
export default (props)=>{
return(
    <div>
<Header/>
{props.children}
<Footer/>
    </div>
);

}