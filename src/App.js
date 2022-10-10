import "./styles/reset.css"
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import DataContext from "./contexts/DataContext";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Main from "./containers/Main";
import NewTask from "./components/NewTask";

export default function App(){

    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [user, setUser] = useState('');
    const context = { task, setTask, deadline, setDeadline, taskList, setTaskList };

    return(
        <BrowserRouter>
            <DataContext.Provider value={context}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/new-task" element={<NewTask/>}/>
                </Routes>
            </DataContext.Provider>
        </BrowserRouter>
    );
};