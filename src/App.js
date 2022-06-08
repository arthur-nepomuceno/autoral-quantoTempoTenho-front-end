import React from "react";
import "./styles/reset.css"
import "./styles/styles.css";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App(){
    return(
        <>
            <Header/>
            <Main />
        </>
    );
};