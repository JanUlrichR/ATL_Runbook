import {Handle, NodeProps, Position} from 'reactflow';

import React, {useState} from "react";
import {SuccessIcon} from "./tasks/SuccessIcon";
import {FailureIcon} from "./tasks/FailureIcon";
import {LockedIcon} from "./tasks/LockedIcon";
import {InProgressIcon} from "./tasks/InProgressIcon";


export const TaskNode = ({id, data}: NodeProps) => {
    const [state, setState] = useState(3)//Math.floor(Math.random() * 4) )
    return (
        <div>
            <Handle type="target" position={Position.Top}/>
            {state === 0 && <SuccessIcon/>}
            {state === 1 && <FailureIcon/>}
            {state === 2 && <LockedIcon/>}
            {state === 3 && <InProgressIcon/>}
            <Handle type="source" position={Position.Bottom}/>
        </div>
    );
}