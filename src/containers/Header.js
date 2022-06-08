import React from "react";
import styled from "styled-components";

export default function Header(){
    return(
        <Section>Quanto Tempo Tenho</Section>
    );
}

const Section = styled.section`
    width: 100%;
    height: 55px;
    background-color: #5F5F5F;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 21px;
    font-weight: 700;
    color: #FFFFFF;
`;