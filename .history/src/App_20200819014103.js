import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import {CssBaseLine} from '@material-ui/core';
import globalSty from '../src/commons/styles/global-style'


function App() {
  return (
    <div className="App"> 
    <StylesProvider injectFirst>
      <CssBaseLine/>
      <globalSty/>


    </StylesProvider>


    </div>
  );
}

export default App;
