import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MainButton from "../components/MainButton";
import TaskList from "../components/TaskList";
import Columns from "../components/Columns";

export default function Main() {

    return (
            <Container>
                <Header/>                   
                <MainButton/>
                <Columns/>
                <TaskList/>
            </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #64A467;
`;

