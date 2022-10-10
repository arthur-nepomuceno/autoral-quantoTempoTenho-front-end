import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DataContext from "../contexts/DataContext";
import Timer from "./Timer";
import axios from "axios";

export default function TaskList() {
    const { taskList, setTaskList } = useContext(DataContext);
    const API = 'http://localhost:5000/tasks'

    function deleteTask(task, number) {
        if (window.confirm(`Quer mesmo excluir o item "${task}" da sua lista?`)) {
            const list = taskList.filter((element, index) => index !== number);
            setTaskList(list);
        }
    }

    //get tasklist from back-end
    useEffect(() => {
        const promise = axios.get(API);
        promise.then((response) => {
            setTaskList(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function renderTask(element, index) {

        const timestampDeadline = +new Date(element.limit)
        const aux = element.limit.split('-');
        const yyyy = aux[0];
        const mm = aux[1];
        const dd = aux[2].substr(0, 2);
        const hh = aux[2].substr(3,);

        return (
            <Container key={element.id}>
                <p id="title">
                    {element.title}
                </p>
                <p id="limit">
                    {`${dd}/${mm}/${yyyy} ${hh}`}
                </p>
                <p id="days-hours">
                    {element.days === 0 ? `${element.hours}h`
                        : `${element.days}d e ${element.hours}h`}
                </p>
                <p id="timer">
                    <Timer timestampDeadline={timestampDeadline} />
                </p>
                <div onClick={() => {deleteTask(element.title, index)}}>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            </Container>
        );
    }

    return (
        <>
            {taskList.sort((element) => {
                return element.limit
            }).map((element, index) => renderTask(element, index))}
        </>
    );
}

const Container = styled.div`
    display: flex;
    padding: 4px 8px 8px 8px;

    p {
        height: 21px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #010D00;
        margin-right: 8px;
        font-size: 13px;
        font-weight: 300;
        padding-left: 8px;
        display: flex;
        align-items: center;
    }

    p#title {
        width: 377px;
    }
    
    p#limit {
        width: 377px;
    }

    p#days-hours {
        width: 144px;
    }

    p#timer {
        width: 377px;
    }

    div {
        width: 55px;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border-radius: 3px;
    }

    ion-icon {
        width: 17px;
        height: 17px;
        color: #A62B1F;
    }
`