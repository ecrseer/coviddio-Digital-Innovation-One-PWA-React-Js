import {Button,Select,MenuItem,Card,Typography}
 from '../../../components/';

 import React,{memo} from 'react';
 import RefreshIco from '../../../assets/refresh.svg';
 import {CardEstilizado,ItemEstilizado} from './style'
 import COUNTRIES from '../../../commons/constants/constants';


 const navigadorTemCompar = navigator.share;

 function Panel({onChange,updateAt,data,country,getCoviddata}){
  const {cases,todayDeaths,recovered
    ,deaths,todayCases}= data;



   const renderPaises = (country,index) =>
   <MenuItem key={`country/${index}`}>
      <ItemEstilizado>
        <div >{country.label}</div>
        <img src={country.flag} alt={country.value}></img>
      </ItemEstilizado>
   </MenuItem>;

   return(
     <Card>
       <CardEstilizado>
       <div>
        <Typography variant="h6" component="span" color="primary">Covid19</Typography>
        <Typography variant="h6" component="span" color="primary">Painel Coronavirus</Typography>
        <Typography variant="h6" component="span" color="primary">Atualizado em: {updateAt}</Typography>
        <div className="mb-2">
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderPaises)}
          </Select>
        </div>
       </div>
        
       </CardEstilizado>
     </Card>
   );

 }

 export default memo(Panel);
