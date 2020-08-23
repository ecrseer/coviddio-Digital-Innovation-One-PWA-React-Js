import React,{memo, useCallback, useState, useEffect} from 'react';
import Api from '../../api'
import StyleMain from 'style'

function Main(){
    
    const [data,setData] = useState({});
    const [country,setCountry] = useState('brazil')

    const getDataCovid = useCallback((country)=>
    Api.getCountry(country)
    .then(data=> console.log(data))
    );

    useEffect(()=>{
        getDataCovid(country)

    },[getDataCovid,country]
)
    return(
        <StyleMain/>
        <div>TTTTT</div>
    )
}

export default memo(Main)