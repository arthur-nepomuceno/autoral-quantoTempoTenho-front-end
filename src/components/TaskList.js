import React, {useState, useContext} from "react";
import styled from "styled-components";
import TaskContext from "../contexts/TaskContext";

export default function TaskList(){
    const {taskList} = useContext(TaskContext);
    return (
        <>
            {taskList.map((element, index) => <p key={index}>{element.task}{element.date}</p>)}
        </>
    );
}