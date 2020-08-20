import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
const fundo = createGlobalStyle`
body {
  color: 'red';
}
`;
const Button = styled.h1`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

function App() {
  return (
    <div className="App"> 
    
    <fundo>
        <h1>dddd</h1>  sinal
        
        
        <Button>Agr</Button>
        </fundo>


    </div>
  );
}

export default App;
