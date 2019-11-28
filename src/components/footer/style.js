import React from 'react'

export default ()=>{
    return(
        <style>
            {`
            
            .row {
                justify-content: space-around;
                display: flex;
            }
            .footer-background {
                background: #152b33;
                min-height: 60vh;
            }
            .last-section-paragraph-footer {
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 15px;
                padding-top: 3%;
            }
            .lists-footer-lastsection {
                display: flex;
                justify-content: center;
                color: #f17f05;
                padding-top: 1%;
            }
            .lists-footer-lastsection li {
                text-decoration: none;
                list-style: none;
                padding-left: 1%;
            }
            
            `}
        </style>
    );
}