import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
html{
    font-family:"Roboto";
}
body{
    background-image: linear-gradient(to right, red , yellow);
}

`

export default  GlobalStyle 