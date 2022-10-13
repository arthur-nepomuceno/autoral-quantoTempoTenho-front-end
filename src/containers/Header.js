import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){

    const date = new Date();
    const dd = date.getDate().toString().padStart(2, '0');
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = date.getFullYear();

    const today = `${dd}.${mm}.${yyyy}`

    return(
        <Container>
            Quanto Tempo Tenho - {today}
            <Link to={'/signin'} style={{textDecoration: "none"}}>
                <p>
                    Sair
                </p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 34px;
    background-color: #010D00;
    border-radius: 5px;
    padding: 0px 8px 0px 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 13px;
    font-weight: 700;
    color: #FFFFFF;

    p {
        color: #FFFFFF;
    }

    p:hover {
        cursor: pointer;
    }
`;