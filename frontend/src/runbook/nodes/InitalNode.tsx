import {Handle, NodeProps, Position} from 'reactflow';
import {SuccessIcon} from "./tasks/SuccessIcon";

export const InitialNode = ({id, data}: NodeProps) => {
    return (
        <div>
            <Handle type="source" position={Position.Bottom} id={"out"}/>
            <SuccessIcon/>
        </div>
    );
}