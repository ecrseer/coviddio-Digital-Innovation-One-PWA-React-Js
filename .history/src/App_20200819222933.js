import React from 'react';
import styled from 'styled-components';
import Bckg from './commons/styles/global-style';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <div className="App"> 
    <StylesProvider>
     <Bckg/>
     
     </StylesProvider>
               


    </div>
  );
}

export default App;
