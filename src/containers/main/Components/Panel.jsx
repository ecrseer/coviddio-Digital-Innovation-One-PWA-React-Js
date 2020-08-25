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



    const shareInfo =
    
      navigator.writeToClipboard(
        {
        url:'google.com',
        text:'Hey just saw',
        title:'titulo'

        }
      )
    ;

    const shareButton =
    <div>
      <Button variant="contained"  color="primary"
          onClick={shareInfo}>

      </Button>
    </div>;

   const renderPaises = (country,index) =>
   <MenuItem key={`country-${index}`} value={country.value}>
      <ItemEstilizado>
        <div >{country.label}</div>
        <img src={country.flag} alt={country.value}/>
      </ItemEstilizado>
   </MenuItem>;

   return(
     <Card>
       <CardEstilizado>
       <div>
        <Typography variant="h5" component="span" color="primary">Covid19</Typography>
        <Typography variant="h6" component="span" color="primary">Painel Coronavirus</Typography>
        <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
        <div className="pt-2">
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
