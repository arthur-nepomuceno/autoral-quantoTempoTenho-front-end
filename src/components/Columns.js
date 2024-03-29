import React from "react"
import styled from "styled-components"

export default function Columns(){
    return (
        <Container>
            <p id="title">título</p>
            <p id="limit">entregar até</p>
            <p id="days-hours">estimativa</p>
            <p id="timer">quanto tempo tenho</p>
            <div></div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 4px 8px 0px 8px;

    p {
        height: 21px;
        border-radius: 5px;
        color: #010D00;
        margin-right: 8px;
        font-size: 13px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    p#title {
        width: 377px;
    }
    
    p#limit {
        width: 377px;
    }

    p#days-hours {
        width: 144px;
    }

    p#timer {
        width: 377px;
    }

    div {
        width: 55px;
        height: 21px;
    }
`