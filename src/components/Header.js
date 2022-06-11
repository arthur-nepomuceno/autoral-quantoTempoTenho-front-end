import React from "react";
import styled from "styled-components";

export default function Header(){
    return(
        <Container>Quanto Tempo Tenho</Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 55px;
    background-color: #010D00;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 21px;
    font-weight: 700;
    color: #FFFFFF;
`;