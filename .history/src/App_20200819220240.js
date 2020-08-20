import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
const Fundo = createGlobalStyle`
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
    
    <Fundo/>
        <h1>dddd</h1>  sinal
        
        
        <Button>Agr</Button>

        


    </div>
  );
}

export default App;
