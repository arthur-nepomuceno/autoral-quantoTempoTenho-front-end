import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DataContext from "../contexts/DataContext";
import Timer from "./Timer";
import axios from "axios";
import { calculateTimeDifference } from "./utils/TaskUtils";

export default function TaskList() {
    const { taskList, setTaskList } = useContext(DataContext);
    const API = 'http://localhost:5000/tasks'

    function getTasks(){
        useEffect(() => {
            const promise = axios.get(API);
            promise.then((response) => {
                setTaskList(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }, [])
    }
    getTasks();

    function deleteTask(title, id, number) {
        if (window.confirm(`Quer mesmo excluir o item "${title}" da sua lista?`)) {

            const promise = axios.delete(`http://localhost:5000/task/${id}`);
            promise.then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })


            const list = taskList.filter((element, index) => index !== number);
            setTaskList(list);
        }
    }
        
    function renderTask(element, index) {
        const {id, title, days, hours, limit} = element;

        const {bgColor, color} = calculateTimeDifference(days, hours, limit);

        const timestampDeadline = +new Date(limit)
        const aux = limit.split('-');
        const yyyy = aux[0];
        const mm = aux[1];
        const dd = aux[2].substr(0, 2);
        const hh = aux[2].substr(3,);

        return (
            <Container key={index} bgColor={bgColor} color={color}>
                <p id="title">
                    {title}
                </p>
                <p id="limit">
                    {`${dd}.${mm}.${yyyy} - ${hh}`}
                </p>
                <p id="days-hours">
                    {days === 0 ? `${hours}h`
                        : `${days}d e ${hours}h`}
                </p>
                <p id="timer">
                    <Timer timestampDeadline={timestampDeadline} />
                </p>
                <div onClick={() => {deleteTask(title, id, index)}}>
                    <ion-icon name="close-circle"></ion-icon>
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
        height: 21px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #010D00;
        margin-right: 8px;
        font-size: 13px;
        font-weight: 500;
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
        color: ${props => props.color};
        background-color: ${props => props.bgColor};
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