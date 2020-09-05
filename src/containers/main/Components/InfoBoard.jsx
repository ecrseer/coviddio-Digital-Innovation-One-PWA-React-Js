import {Button,Select,MenuItem,Card,Typography}
 from '../../../components/';

 import React,{memo} from 'react';
 import RefreshIco from '../../../assets/refresh.svg';
 import {CardEstilizado,ItemEstilizado} from './style';
 import {text1,text2,text3} from '../../../commons/constants/about';
 
 import {lucovid,aglo} from '../../../assets/index';

 function infoBoard(){
  return(
    <div className="mb-3">
  <Card>
    <CardEstilizado>
      <div> 
        <Typography variant="h5" component="span" color="primary">O que é covid 19?</Typography><br/>
        <Typography variant="h6" component="span" color="primary">Saiba mais sobre esse vírus</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{text1}</Typography><br/><br/>
        <img src={lucovid} alt="lupa covid" width="50%"></img><br/>
        <Typography variant="h6" component="span" color="primary">Transmissão: como se dá?</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{text2}</Typography><br/><br/>

        <Typography variant="h6" component="span" color="primary">Previna-se!</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{text3}</Typography><br/><br/>

        <img src={aglo} alt="lupa covid" width="50%"></img><br/>

        
      </div>
    </CardEstilizado>
    
   </Card>
   <Typography variant="caption" component="span" color="#345" width="2%">Gabriel Justino m. Couto</Typography><br/><br/>
   </div>
  );

 }

 export default memo(infoBoard);