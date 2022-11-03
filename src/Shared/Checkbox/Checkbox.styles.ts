import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 32px;
    cursor: default;

`
interface Props {
    checked: boolean
}

export const CheckIcon = styled.div<Props>`
   width: 14px;
   height: 14px;
   border-radius: 7px;

   border: 2px solid #4270cc;

   background-color: ${props => props.checked ? '#4270cc' : ''};

   cursor: pointer;

`