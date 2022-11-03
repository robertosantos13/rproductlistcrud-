import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    height: 45px;

    span {
        font-size: 10px;
        color: #335eb5;
    }
   
   `

export const Title = styled.div`
    font-size: 10px;
    font-weight: 700;
    color: #335eb5;
    margin-top: 15px;
    margin-bottom: 5px;
    `

interface Props {
    percentage: number,
    color: string
}

export const ProgressBar = styled.div<Props>`
    border-radius: 4px;
    height: 35px;


    background-color: ${props => props.color ? props.color : '' };
    
    
    width: ${props => props.percentage ? props.percentage : 0}%;

`