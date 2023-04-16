import {Handle, NodeProps, Position, useUpdateNodeInternals} from 'reactflow';
import {useStore} from "../store";
import {useEffect, useState} from "react";

export const ParallelingClosingNode = ({id, data}: NodeProps) => {
    const [handleCount, setHandleCount] = useState(1)
    const {nodes, edges, addEdge} = useStore(state => ({nodes: state.nodes, edges: state.edges, addEdge: state.addEdge}))
    const updateNodeInternals = useUpdateNodeInternals()


    useEffect(() => {
        updateNodeInternals(id)
        const handleIds = [...Array(handleCount).keys()]
        handleIds.forEach(handleId => {
            if (!edges.some(edge => edge.source === data.openingNodeId && edge.sourceHandle === 'o'+handleId)){
                const innerEdge = {
                    id: `${data.openingNodeId}->${id}+(${handleId})`,
                    source: data.openingNodeId,
                    sourceHandle: 'o'+handleId,
                    target: `${id}`,
                    targetHandle: 'i'+handleId,
                    type: 'runbook',
                };
                addEdge(innerEdge)
            }
        })
    }, [handleCount])

    const node = nodes.find(node => node.id === data.openingNodeId)
    const width = 500


    if (!node) {
        return  <div style={{width, backgroundColor: "red"}}>Orphaned node</div>
    }

    if (handleCount !== node.data.parallelTasks) {
        setHandleCount(node.data.parallelTasks)
    }


    return (
        <div style={{width, height:"20px", backgroundColor: "red"}}>
            {Array.from(Array(handleCount).keys()).map(id => <Handle type="target" position={Position.Top} id={"i" + id}
                                                                     style={{left: width * (id + 1) / (handleCount + 1)}}/>)}
            <Handle type="source" position={Position.Bottom}/>
        </div>
    );
}