import React from "react";
import './App.css'
export const App: React.FC<{}> = ({}) => {
    return (
        <div className={'app'}>
            <div className={'header'}></div>
            <div className={'runbook'}>
            </div>
            <div className={'sidebar'}></div>
        </div>
    )
}