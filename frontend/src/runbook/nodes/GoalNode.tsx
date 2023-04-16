import {Handle, NodeProps, Position} from 'reactflow';
import {SuccessIcon} from "./tasks/SuccessIcon";


export const GoalNode = ({id, data}: NodeProps) => {
    return (
        <div className={'goal'}>
            <Handle className={"Whyyy"} type="target" position={Position.Top} id={"in"}/>
            <SuccessIcon/>
        </div>
    );
}