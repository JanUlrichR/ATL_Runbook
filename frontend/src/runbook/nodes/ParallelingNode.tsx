import {Handle, NodeProps, Position, useUpdateNodeInternals} from 'reactflow';
import {useStore} from "../store";

export const ParallelNodeWidth = 500

export const ParallelingNode = ({id, data}: NodeProps) => {
    const updateTasks = useStore(state => state.updateParallelTasks)
    const updateNodeInternals = useUpdateNodeInternals();


    const updateNode = (newHandleCount: number) => {
        updateTasks(id, newHandleCount)
        updateNodeInternals(id)
    }



    const handleCount = data.parallelTasks
    return (
        <div style={{width:ParallelNodeWidth, backgroundColor: "red"}}>
            <Handle type="target" position={Position.Top}/>
            <div>
                <input type={"button"} onClick={() => updateNode(handleCount + 1)} value={"+"}/>
                <input type={"button"} onClick={() => updateNode(handleCount - 1)} value={"-"}/>
            </div>
            {Array.from(Array(handleCount).keys()).map(id => <Handle type="source" position={Position.Bottom}
                                                                     id={"o" + id}
                                                                     style={{left: ParallelNodeWidth * (id + 1) / (handleCount + 1)}}/>)}
        </div>
    );
}