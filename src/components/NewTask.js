import React from "react";
import Header from "../containers/Header";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewTask(){

    const navigate = useNavigate();
    const [title, setTitle] = useState('asas');
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(1);
    const [limit, setLimit] = useState(null);
    const API = 'http://localhost:5000/task';

    const now = +new Date();
    const test = +new Date(limit);

    function Send(event){
        event.preventDefault();
        
        if(test < now){
            alert('Você não pode escolher um momento anterior no tempo.');
            return;
        }
        
        if(test - now < 3600000){
            alert('O tempo mínimo permitido para a execução de uma tarefa é de 1 hora.');
            return;
        }
        
        const body = {title, 
            days: Number(days), 
            hours: Number(hours), 
            limit};

        const promise = axios.post(API, body);

        promise.then((response) => {
            setTitle('');
            setDays(0);
            setHours(1);
            setLimit(null);
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })

    }
    

    return (
        <Container>
            <Section>
                <Header/>
                <form onSubmit={Send}>
                    <div id='title'>
                        <h3>Nova tarefa</h3>
                    </div>
                    <input type='text' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <input type='number' placeholder='dias' min={0} value={days} onChange={(e) => setDays(e.target.value)} required/>
                    <input type='number' placeholder='horas' min={1} value={hours} onChange={(e) => setHours(e.target.value)} required/>
                    <input type='datetime-local' placeholder='data limite' value={limit} onChange={(e) => setLimit(e.target.value)} required/>
                    <button type='submit'>
                        <h3>Salvar tarefa</h3>
                    </button>
                </form>
                <Link to="/" style={{textDecoration: "none"}}>
                    <h4>Retornar</h4>
                </Link>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #64A467;
`;

const Section = styled.section`

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
        margin-top: 8px;
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