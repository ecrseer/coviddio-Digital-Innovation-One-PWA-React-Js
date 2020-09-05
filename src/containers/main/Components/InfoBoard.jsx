import {Button,Select,MenuItem,Card,Typography}
 from '../../../components/';

 import React,{memo} from 'react';
 import RefreshIco from '../../../assets/refresh.svg';
 import {CardEstilizado,ItemEstilizado} from './style';
 import text from '../../../commons/constants/about.js';
 import text2 from '../../../commons/constants/about2.js';
 import {lucovid} from '../../../assets/index';

 function infoBoard(){
  return(
    <div className="mb-3">
  <Card>
    <CardEstilizado>
      <div> 
        <Typography variant="h5" component="span" color="primary">O que é covid 19?</Typography><br/>
        <Typography variant="h6" component="span" color="primary">Saiba mais sobre esse vírus</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{text}</Typography><br/><br/>
        <img src={lucovid} alt="lupa covid" width="50%"></img><br/>
        <Typography variant="h6" component="span" color="primary">Transmissão: como se dá?</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{text2}</Typography><br/><br/>
      </div>
    </CardEstilizado>
   </Card>
   </div>
  );

 }

 export default memo(infoBoard);