import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
const fundo = createGlobalStyle`
body {
  color: 'purple';
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
    <div>
        <h1>dddd</h1>  sinal
        </div>
        <fundo>
        <Button>Agr</Button>
        </fundo>


    </div>
  );
}

export default App;
