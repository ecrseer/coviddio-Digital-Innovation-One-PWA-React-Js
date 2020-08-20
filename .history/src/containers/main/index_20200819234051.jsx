import React,{memo, useCallback, useState} from 'react';
import Api from '../../api'

const [data,setData] = useState({});


const getDataCovid = useCallback((country)=>
Api.getCountry(country)
.then(data=> console.log(data));
);

function Main(){
    return(
    <div>TTTTT</div>
    )
}

export default memo(Main)