import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const navigate = useNavigate();
    const API = '';

    function Send(event){
        event.preventDefault();

        if(password === checkPassword){
            const body = {name, email, password};
            const promise = axios.post(API, body);
            promise.then(response => {
                navigate('/');
            });
            promise.catch((error) => {console.log(error.response.data)})
        } else {
            alert('Please, confirm password correctly.')
        }
    }

    return(
        <Container>
            <form onSubmit={Send}>
                <p>Quanto Tempo Tenho</p>
                <input type='text' placeholder='Nome e Sobrenome' value={name} onChange={(e) => {setName(e.target.value)}} required/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <input type='password' placeholder='Senha' value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                <input type='password' placeholder='Confirme a senha' value={checkPassword} onChange={(e) => {setCheckPassword(e.target.value)}} required/>
                <button type='submit'>
                    <h3>Cadastrar</h3>
                </button>
            </form>
            <Link to="/signin" style={{textDecoration: "none"}}>
                <h4>Já tem uma conta? Entre agora!</h4>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #64A467;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 50px;
        color: #FFFFFF;
    }

    input {
        width: 377px;
        height: 34px;
        border: none;
        border-radius: 5px;
        margin-bottom: 14px;
        outline: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #000000;
        padding-left: 15px;
        padding-right: 15px;
    }

    input::placeholder {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #000000;
    }

    button {
        width: 377px;
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
        margin-top: 13px;
        margin-bottom: 13px;
    }

    h4:hover {
        cursor: pointer;
    }
`