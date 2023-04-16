import React from "react";
import './App.css'
import Runbook from "./runbook/Runbook";
export const App: React.FC<{}> = ({}) => {
    return (
        <div className={'app'}>
            <div className={'header'}></div>
            <div className={'runbook'}>
                <Runbook/>
            </div>
            <div className={'sidebar'}></div>
        </div>
    )
}