import React, {useState, useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";

export default function TaskList(){
    const {taskList, setTaskList} = useContext(TaskContext);

    function deleteTask(task, number){
        if(window.confirm(`Quer mesmo excluir o item "${task}" da sua lista?`)){
            const list = taskList.filter((element, index) => index !== number);
            setTaskList(list);
        } 
    }

    function renderTask(element, index){
        return (
            <Container key={index}>
                <p id="task">
                    {element.task}
                </p>
                <p id="date">
                    {element.date}
                </p>
                <div>
                    <ion-icon name="close-circle" onClick={() => deleteTask(element.task, index)}></ion-icon>
                </div>
            </Container>
            
        );
    }

    return (
        <>
            {taskList.map((element, index) => renderTask(element, index))}
        </>
    );
}

const Container = styled.div`
    display: flex;
    padding: 4px 8px 8px 8px;

    p {
        width: 100%;
        height: 34px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #010D00;
        margin-right: 8px;
        font-size: 17px;
        padding-left: 8px;
        display: flex;
        align-items: center;
    }

    p#date {
        width: 233px;
    }

    div {
        width: 55px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border-radius: 3px;
    }

    ion-icon {
        width: 23px;
        height: 23px;
        color: #A62B1F;
    }
`