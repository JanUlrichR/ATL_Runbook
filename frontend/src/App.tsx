import React, {useState} from "react";
import './App.css'
import Runbook from "./runbook/Runbook";
import {Header} from "./header/Header";
import {Sidebar} from "./sidebar/Sidebar";
export const App: React.FC<{}> = ({}) => {
    const [selectedTask, setSelectedTask] = useState<any>(undefined)

    const onTaskClick = (task:any) => {
        setSelectedTask(task)
    }

    const onTaskDismiss = ()  => {
        setSelectedTask(null)
    }

    return (
        <div className={'app'}>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'runbook'}>
                <Runbook selectedTask={selectedTask} selectTask={onTaskClick} dismissTask={onTaskDismiss}/>
            </div>
            <div className={'sidebar'}><Sidebar selectedTask={selectedTask} dismissTask={onTaskDismiss}/></div>
        </div>
    )
}