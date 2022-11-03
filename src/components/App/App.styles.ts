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