import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100vw;

    text-align: center;


`
export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    height: 180px;

    > div h3, div img:hover {
        cursor: pointer;
    }

`

export const ComputerContainer = styled.div`

display: flex;
    justify-content: center;
    align-items:center;

    height: 180px;
    
    `


export const ResultContainer = styled.div`
    .table {
        display: flex;
        justify-content: center;
        position: fixed;
        bottom:10px;
        width: 100%;
    }

`