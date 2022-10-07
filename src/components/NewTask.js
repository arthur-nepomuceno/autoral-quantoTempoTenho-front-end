import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NewTask(){

    return (
        <Container>
        <form>
            <div id='title'>
                <h3>Nova tarefa</h3>
            </div>
            <input type='text' placeholder='Título' required/>
            <input type='number' placeholder='dias' required/>
            <input type='number' placeholder='horas' required/>
            <input type='datetime-local'  placeholder='data limite' required/>
            <button type='submit'>
                <h3>Salvar tarefa</h3>
            </button>
        </form>
        <Link to="/" style={{textDecoration: "none"}}>
            <h4>Retornar</h4>
        </Link>
    </Container>
    )
}

const Container = styled.div`

    padding-top: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div#title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    div#title h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        margin-bottom: 8px;
        color: #FFFFFF;
    }

    input {
        width: 233px;
        height: 21px;
        border: none;
        border-radius: 5px;
        margin-bottom: 8px;
        outline: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        color: #000000;
        padding-left: 13px;
        padding-right: 13px;
    }

    input::placeholder {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        color: #ADADAD;
    }

    button {
        width: 233px;
        height: 34px;
        background-color: #010D00;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    button h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        color: #FFFFFF;
    }

    h4 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        color: #FFFFFF;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    h4:hover {
        cursor: pointer;
    }
`