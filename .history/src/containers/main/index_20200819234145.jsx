import React,{memo, useCallback, useState, useEffect} from 'react';
import Api from '../../api'

const [data,setData] = useState({});


const getDataCovid = useCallback((country)=>
Api.getCountry(country)
.then(data=> console.log(data))
);
useEffect(()=>{},[getDataCovid]
)
function Main(){
    return(
    <div>TTTTT</div>
    )
}

export default memo(Main)