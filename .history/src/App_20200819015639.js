import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import globalSty from '../src/commons/styles/global-style'


function App() {
  return (
    <div className="App"> 
    <StylesProvider injectFirst>
      <CssBaseLine/>
      <globalSty/>
      <div>
        sinal
      </div>


    </StylesProvider>


    </div>
  );
}

export default App;
