import React,{memo, useCallback, useState, useEffect} from 'react';
import Api from '../../api';
import StyleMain from './style';
import Bbo from './Components/Board';
function Main(){
    
    const [data,setData] = useState({});
    const [country,setCountry] = useState('brazil');

    const getDataCovid = useCallback((country)=>
    Api.getCountry(country)
    .then(data=> /* console.log(data) &&  */ setData(data)    
    )
    );

    useEffect(()=>{
        getDataCovid(country)
        

    },[getDataCovid,country]
)
    return(        
        <div>TTTTT
             <StyleMain>
                 <div className='mb-2'>
                     
                 </div>
                 <Bbo data={data}></Bbo>
             </StyleMain>
        </div>
    )
}

export default memo(Main)