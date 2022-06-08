import React, { useState} from "react";
import styled from "styled-components";
import Input from "./Input";
import TaskList from "./TaskList";
import TaskContext from "../contexts/TaskContext";

export default function Main(){
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [taskList, setTaskList] = useState([]);
    const contextValues = {task, setTask, date, setDate, taskList, setTaskList};

    return (
        <Container>
            <TaskContext.Provider value={contextValues}>
                <Input/>
                <TaskList/>
            </TaskContext.Provider>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #BFBFBF;
`;

