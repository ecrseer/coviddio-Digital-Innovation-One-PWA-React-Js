import React from 'react';
import styled from 'styled-components';
import Bckg from './commons/styles/global-style';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './containers/main/';


function App() {
  return (
    <div className="App"> 
    <StylesProvider>
      <CssBaseline/>
      <Bckg/>VDL
      <Main/>

     </StylesProvider>
               


    </div>
  );
}

export default App;
