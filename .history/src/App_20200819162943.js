import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import globalSty from '../src/commons/styles/global-style'
const butto =()=>(
  <a href>content</a>
);
const Button = globalSty.butto`
background: palevioletred;
border-radius: 3px;
border: none;
color: white;
`

function App() {
  return (
    <div className="App"> 
    <StylesProvider injectFirst>
      <CssBaseLine/>
      <globalSty/>
        <div>
        <h1>dddd</h1>  sinal
        </div>
        
      



    </StylesProvider>


    </div>
  );
}

export default App;
