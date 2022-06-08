import React, {useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";

export default function Input(){
    const { task, setTask, date, setDate, taskList, setTaskList } = useContext(TaskContext);

    function saveTask(){
        setTaskList([...taskList, {task, date}]);
    }

    return(
        <Container>
            <input type="text" id="task" placeholder="tarefa" value={task} onChange={(e) => {setTask(e.target.value)}}/>
            <input type="date" id="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
            <button type="button" onClick={saveTask}>Salvar</button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    background-color: #FFFFFF;

    input {
        width: 100%;
        height: 55px;
        font-size: 21px;
        color: #404040;
        border-radius: 8px;
    }

    input::placeholder{
        font-size: 21px;
        color: #404040;
    }
`;