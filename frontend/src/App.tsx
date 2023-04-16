import React, {useState} from "react";
import './App.css'
import Runbook from "./runbook/Runbook";
import {Header} from "./header/Header";
export const App: React.FC<{}> = ({}) => {
    return (
        <div className={'app'}>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'runbook'}>
                <Runbook/>
            </div>
            <div className={'sidebar'}></div>
        </div>
    )
}