import React from "react";
import "./styles/reset.css"
import "./styles/styles.css";
import Header from "./containers/Header";
import Main from "./containers/Main";

export default function App(){
    return(
        <>
            <Header/>
            <Main />
        </>
    );
};