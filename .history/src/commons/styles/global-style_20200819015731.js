import {createGlobalStyle} from 'styled-components';
import covid2 from '../../assets/covid.jpg'

const globalStyle = createGlobalStyle`
*{
    
}
body{
    color:red;
    line-height:normal;
}
html,body{
     
}
#root{
    background:url(${covid2});
    height:100%;
    width:100%;
    background-size: cover;
    background-position: center center;
}

`

export default globalStyle;