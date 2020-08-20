import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
function butto (){ 
  return(
  <a href="google.com">content</a>
);
}
const Button = createGlobalStyle.h1`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

function App() {
  return (
    <div className="App"> 
    <div>
        <h1>dddd</h1>  sinal
        </div>
        <Button>Agr</Button>


    </div>
  );
}

export default App;
