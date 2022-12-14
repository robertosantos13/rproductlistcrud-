import styled from "styled-components";


import bg from '../../assets/bg.svg'


export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
`


export const Container = styled.div`
    width: 925px;
    height: 495px;

    background-color: #c5c5c5;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    box-shadow: 0px 3px 2px #c5c5c5;
`