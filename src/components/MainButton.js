import React, {useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";
import { Link } from "react-router-dom";

export default function Input(){
    const { task, setTask, deadline, setDeadline, taskList, setTaskList } = useContext(TaskContext);

    function saveTask(){
        if(!deadline || !task){
            alert('Por favor preencha os campos corretamente.');
            return;
        }

        // const aux = deadline.split("-");
        // const year = aux[0];
        // const month = aux[1];
        // const day = aux[2];
        // const limit = `${day}/${month}/${year}`;

        console.log(+new Date(deadline));
        console.log(+new Date());
        console.log(+new Date() < +new Date(deadline));
        
        setTaskList([...taskList, {task, date: deadline}]);
    }

    return(
        <Container>
            <Link to="/new-task" style={{textDecoration: "none"}}>
                <button type='button'>
                    <h3>Nova tarefa</h3>
                </button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    background-color: #64A467;
    padding-top: 8px;

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
`;