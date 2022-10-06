import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Header(){
    dayjs.locale(`pt-br`);
    const today = dayjs().format(`dddd, DD/MM/YYYY`);

    return(
        <Container>Quanto Tempo Tenho - {today}</Container>
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