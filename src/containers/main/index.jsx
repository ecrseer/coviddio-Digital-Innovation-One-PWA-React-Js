import React,{memo, useCallback, useState, useEffect} from 'react';
import Api from '../../api';
import StyleMain from './style';
import Bbo from './Components/Board';
import Panel from './Components/Panel';
import InfoBoard from './Components/InfoBoard';

function Main(){
    
    const [data,setData] = useState({});    
    const [country,setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleString()


    const getDataCovid = useCallback((country)=>
    Api.getCountry(country)
    .then(datas=> /* console.log(data) &&  */ setData(datas)    
    ),[data,country]
    );

    const handleChange = ({target})=>{
        const country = target.value
        setCountry(country)
    }

    useEffect(()=>{
        getDataCovid(country)
        

    },[country]
)
    return(        
        <div>
             <StyleMain>
                 <div className='mb-2'>
                     <Panel
                        data={data}
                        updateAt={updateAt}
                        onChange={handleChange}
                        country={country}
                        getCoviddata={getDataCovid}
                     />
                 </div>
                 <Bbo data={data}></Bbo>
                 <InfoBoard/>
             </StyleMain>
        </div>
    )
}

export default memo(Main)