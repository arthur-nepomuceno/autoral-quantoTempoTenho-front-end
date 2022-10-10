import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext} from 'react';
import DataContext from '../contexts/DataContext';

export default function SignIn(){
    const {setUser} = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API = 'https://driven-pj13-mywallet.herokuapp.com/sign-in';

    function Send(event){
        event.preventDefault();
        const body = {email, password}
        const promise = axios.post(API, body);
        promise.then(response => {
            const info = response.data;
            setUser({...info});
            navigate('/main');
        })
        promise.catch((error) => {console.log(error.response.data)})
    }

    return(
        <Container>
            <form onSubmit={Send}>
                <p>Quanto Tempo Tenho</p>
                <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <input type='password' placeholder='Senha' value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                <button type='submit'>
                    <h3>Entrar</h3>
                </button>
            </form>
            <Link to="/signup" style={{textDecoration: "none"}}>
                <h4>Primeira vez? Cadastre-se!</h4>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 100%;
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
        margin-bottom: 13px;
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