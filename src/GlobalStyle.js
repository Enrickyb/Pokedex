import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #2B2A2C;
}
::-webkit-scrollbar{
    background-color: #FFFFFF;
    width: 12px;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: #D53B47;
    border-radius: 5px;
}

`;
