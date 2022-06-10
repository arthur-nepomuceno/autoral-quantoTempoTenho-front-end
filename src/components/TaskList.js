import React, {useState, useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";

export default function TaskList(){
    const {taskList, setTaskList} = useContext(TaskContext);

    function deleteTask(number){
        const list = taskList.filter((element, index) => index !== number);
        setTaskList(list); 
    }

    function renderTask(element, index){
        return (
            <p key={index} onClick={() => deleteTask(index)}>
                {element.task}{element.date}
            </p>
        );
    }

    return (
        <>
            {taskList.map((element, index) => renderTask(element, index))}
        </>
    );
}