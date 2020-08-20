import { createGlobalStyle } from 'styled-components';
import covid2 from '../../assets/covid.jpg';

const globalStyle = createGlobalStyle`
*{
    outline: none;
    box-sizing:border-box;
}
body{
    color:red;
    line-height:normal;
}
html,body{
    width:100%;
    min-height:100%;
    display: flex;
    padding:0;
    margin:15;
}
#root{
    background:url(${covid2});
    height:100%;
    width:100%;
    background-size: cover;
    background-position: center center;
}

`

export default globalStyle