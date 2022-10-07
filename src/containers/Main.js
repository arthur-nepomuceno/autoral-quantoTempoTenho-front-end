import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import TaskList from "../components/TaskList";
import TaskContext from "../contexts/TaskContext";
import NewTask from "../components/NewTask";

export default function Main() {
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("");
    const [taskList, setTaskList] = useState([]);
    const context = { task, setTask, deadline, setDeadline, taskList, setTaskList };

    return (
        <BrowserRouter>
            <Container>
                <TaskContext.Provider value={context}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <MainButton/>
                                <TaskList/>
                            </>
                        }/>
                        <Route path="/new-task" element={<NewTask/>}/>
                    </Routes>
                </TaskContext.Provider>
            </Container>
        </BrowserRouter>
    );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #64A467;
`;

