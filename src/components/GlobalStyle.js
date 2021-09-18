import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        min-width: 360px;
        &::-webkit-scrollbar{
            width: 0.3rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff7676;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
        @media(max-width:768px){
            font-size: 70%;
        }
        
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.1rem;
        color: #333;
        padding: 1rem 0rem;
    }
    h5{
        padding-bottom: 0.2rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
        
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;