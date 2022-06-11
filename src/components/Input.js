import React, {useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";

export default function Input(){
    const { task, setTask, date, setDate, taskList, setTaskList } = useContext(TaskContext);

    function saveTask(){
        const splitDate = date.split("-");
        const year = splitDate[0];
        const month = splitDate[1];
        const day = splitDate[2];
        const Date = `${day}/${month}/${year}`;
        console.log(Date);
        setTaskList([...taskList, {task, date: Date}]);
    }

    return(
        <Container>
            <input type="text" id="task" value={task} onChange={(e) => {setTask(e.target.value)}} placeholder="nova tarefa" autoFocus/>
            <input type="date" id="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
            <div>
                <ion-icon name="add-circle" onClick={saveTask}></ion-icon>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    background-color: #64A467;
    padding-top: 8px;

    input {
        width: 100%;
        height: 34px;
        font-size: 17px;
        color: #010D00;
        border-radius: 5px;
        border: none;
        padding-left: 8px;
        margin-left: 8px;
        outline: none;
    }

    input#date {
        width: 233px;
    }

    input::placeholder{
        font-style: italic;
        font-size: 17px;
        color: #D1D99A;
    }

    div {
        width: 55px;
        height: 34px;
        margin: 0px 8px 0px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border-radius: 3px;
    }

    ion-icon {
        width: 23px;
        height: 23px;
        color: #2E5902;
    }
`;