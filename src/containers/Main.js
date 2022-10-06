import React, { useState} from "react";
import styled from "styled-components";
import Input from "../components/Input";
import TaskList from "../components/TaskList";
import TaskContext from "../contexts/TaskContext";

export default function Main(){
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("");
    const [taskList, setTaskList] = useState([]);
    const context = {task, setTask, deadline, setDeadline, taskList, setTaskList};

    return (
        <Container>
            <TaskContext.Provider value={context}>
                <Input/>
                <TaskList/>
            </TaskContext.Provider>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #64A467;
`;

