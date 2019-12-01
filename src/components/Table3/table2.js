import {apiPath} from '../config'
import React,{useState,useEffect}  from 'react';
import Style from './style'
import {CSVLink } from "react-csv";
import axios from 'axios';
import {TablePagination} from 'react-pagination-table';
import arraySort from 'array-sort';
//import Loader from "react-loader-spinner";

export default()=>
{
    const [dataa, setdata]= useState([]);
    const [nameSortType, setNameSortType] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(apiPath + "/api/team").then(res=>{
            setdata(res.data);
            });
    },[]);


    const sortBy  = (x) => {
        x.toString();
        if(!nameSortType || nameSortType==="DESC"){
            setdata(arraySort(dataa, x));
            setNameSortType("ASC");
            // this.classList.toggle("fas fa-caret-up");
        }
        else
        {
            setdata(arraySort(dataa, x,{reverse: true}  ));
            setNameSortType("DESC")
            // this.classList.toggle("fas fa-caret-down");
        }
    };
    const [dataBackup, setdataBackup] = useState([]);
    const searchHandler = (value) => {
        if (dataBackup.length === 0) {
            setdataBackup([...dataa]);
        }
        setdata([...dataBackup.filter(dataa => dataa.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1)])

    };
    return (

    <>

    {/*<div >*/}
    {/*<div className="d-flex Loader">*/}
    {/*<Loader*/}
    {/*type="ThreeDots"*/}
    {/*color="#006a90"*/}
    {/*height={100}*/}
    {/*width={100}*/}
    {/*timeout={3000} //3 secs*/}
    {/*/>*/}
    {/*</div>*/}
    {/*</div>*/}

    <div className="d-flex">
        <input className="search-bar" placeholder="SEARCH BY NAME"
               type="text" onChange={event => {
            searchHandler(event.target.value)
        }}/>
        <CSVLink data={dataa}>
            <button className="EXPORT-btn" onClick={() => {
                CSVLink(dataa)
            }}> EXPORT DATA
            </button>
        </CSVLink>
    </div>


    <div className="">
        <div className="header">
            <div onClick={()=>sortBy('firstName')}>
                {nameSortType&&nameSortType==="ASC"?
                    <div className="fas fa-caret-up">FIRST-NAME</div>:
                    <div className="fas fa-caret-down">FIRST-NAME</div>}
            </div>
            <div onClick={() => sortBy('lastName')}>
                {nameSortType&&nameSortType==="ASC"?
                    <div className="fas fa-caret-up">LAST-NAME</div>:
                    <div className="fas fa-caret-down">LAST-NAME</div>}

            </div>
            <div style={{paddingLeft:'5%'}} onClick={() => sortBy('email')}>
                {nameSortType&&nameSortType==="ASC"?
                    <div className="fas fa-caret-up">EMAIL</div>:
                    <div className="fas fa-caret-down">EMAIL</div>}

            </div>
            <div onClick={() => sortBy('phone')}>
                {nameSortType&&nameSortType==="ASC"?
                    <div className="fas fa-caret-up">PHONE</div>:
                    <div className="fas fa-caret-down">PHONE</div>}
            </div>
            <div onClick={() => sortBy('postBody')}>
                {nameSortType&&nameSortType==="ASC"?
                    <div className="fas fa-caret-up">POST-BODY</div>:
                    <div className="fas fa-caret-down">POST-BODY</div>}

            </div>
        </div>



        <div className="column">
        { dataa &&  dataa.length!==0 &&
        <TablePagination
            data={dataa}
            columns="firstName.lastName.email.phone.postBody"
            perPageItemCount={ 10 }
            totalCount={dataa && dataa.length ? parseInt(dataa.length / 1) : 1

            }

        />
        }
        </div>
    </div>
    <Style/>
    </>

    );

}







