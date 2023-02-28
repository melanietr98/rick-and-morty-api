import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Calibre-Medium", sans-serif;
  }

  body {
    min-height: 100vh;
    background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(27,23,72,1) 25%, rgba(11,11,43,1) 50%, rgba(0,0,0,1) 100%), url('https://i.imgur.com/6jZadJ4.jpg') no-repeat center center fixed;
    background-size: cover;
    scroll-behavior: smooth;
    position: relative; /* Add this line to make the green overlay cover the whole screen */
  }

  /* Add hints of green to the background */
  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 0, 0.1);
    z-index: -1;
  }

  input::selection, a::selection, h1::selection, h2::selection, h3::selection, h4::selection, p::selection, button::selection, span::selection, li::selection, img::selection {
    background-color: rgb(195, 240, 225);
    color: rgb(63, 185, 185);
  }

  a {
    cursor: pointer;
    text-decoration: none;
  } 

  img {
    pointer-events: none;
    user-select: none;
  }

  ul {
    list-style: none;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8be024;
    border-radius: 20px;
    border: 2px solid #ffffff;
  }

  &::-webkit-scrollbar-track {
    background-color: #dadada;
    border-radius: 0px;
  }
`;

export default GlobalStyle;
