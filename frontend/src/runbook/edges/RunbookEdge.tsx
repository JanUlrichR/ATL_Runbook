import {EdgeProps, getBezierPath} from 'reactflow';

import './RunbookEdge.css'
import {ParallelNodeWidth} from "../nodes/ParallelingNode";
import {useStore} from "../store";
import {v4 as uuidv4} from 'uuid';

const useEdgeClick = (id: EdgeProps['id']) => {
    //TODO how can we do this more efficient
    const {nodes, edges,getNode, getEdge, setNodes, setEdges} = useStore(state => ({nodes: state.nodes, edges: state.edges, getNode: state.getNode, getEdge: state.getEdge,setNodes: state.setNodes, setEdges: state.setEdges}))

    return () => {
        const edge = getEdge(id);

        if (!edge) {
            return;
        }

        const sourceNode = getNode(edge.source);
        const targetNode = getNode(edge.target);

        console.log(sourceNode)

        if (!targetNode || !sourceNode) {
            return;
        }
        const insertNodeId = uuidv4();

        const insertNode = {
            id: insertNodeId,
            position: {
                x: (targetNode.position.x + sourceNode.position.x) / 2,
                y: (targetNode.position.y + sourceNode.position.y) / 2
            },
            data: {label: ''},
            type: 'task',
            width: 50,
            height: 50
        };

        const sourceEdge = {
            id: `${sourceNode.id}->${insertNodeId}`,
            source: sourceNode.id,
            sourceHandle: edge.sourceHandle,
            target: insertNodeId,
            type: 'runbook',
        };

        const targetEdge = {
            id: `${insertNodeId}->${targetNode.id}`,
            source: insertNodeId,
            target: targetNode.id,
            targetHandle: edge.targetHandle,
            type: 'runbook',
        };

        setEdges(edges.filter((e) => e !== edge).concat([sourceEdge, targetEdge]));
        const targetNodeIndex = nodes.findIndex((node) => node.id === targetNode.id);
        setNodes([...nodes.slice(0, targetNodeIndex), insertNode, ...nodes.slice(targetNodeIndex, nodes.length)]);
    };
}

const useEdgeClick2 = (id: EdgeProps['id']) => {
    const {nodes, edges,getNode, getEdge, setNodes, setEdges} = useStore(state => ({nodes: state.nodes, edges: state.edges, getNode: state.getNode, getEdge: state.getEdge,setNodes: state.setNodes, setEdges: state.setEdges}))

    return () => {
        const edge = getEdge(id);

        if (!edge) {
            return;
        }

        const sourceNode = getNode(edge.source);
        const targetNode = getNode(edge.target);

        if (!targetNode || !sourceNode) {
            return;
        }

        const insertNodeId = uuidv4();

        const insertOpeningNode = {
            id: insertNodeId,
            position: {
                x: (targetNode.position.x + sourceNode.position.x) / 2,
                y: sourceNode.position.y + (targetNode.position.y - sourceNode.position.y) / 3
            },
            data: {parallelTasks: 1},
            type: 'parallel',
            width: ParallelNodeWidth,
            height: ParallelNodeWidth
        };

        const insertClosingNode = {
            id: `${insertNodeId}_closing`,
            position: {
                x: (targetNode.position.x + sourceNode.position.x) / 2,
                y: sourceNode.position.y + (targetNode.position.y - sourceNode.position.y) / 3 * 2
            },
            data: {openingNodeId: insertNodeId},
            type: 'parallelClosing',
            width: ParallelNodeWidth,
            height: ParallelNodeWidth
        };

        const sourceEdge = {
            id: `${edge.source}->${insertNodeId}`,
            source: edge.source,
            target: insertNodeId,
            type: 'runbook',
        };

        const innerEdge = {
            id: `${insertNodeId}->${insertNodeId}_closin_1`,
            source: insertNodeId,
            sourceHandle: 'o0',
            target: `${insertNodeId}_closing`,
            targetHandle: 'i0',
            type: 'runbook',
        };

        const targetEdge = {
            id: `${insertNodeId}_closing_1->${edge.target}`,
            source: `${insertNodeId}_closing`,
            target: edge.target,
            type: 'runbook',
        };

        setEdges(edges.filter((e) => e.id !== id).concat([sourceEdge, innerEdge, targetEdge]));
        const targetNodeIndex = nodes.findIndex((node) => node.id === edge.target);
        setNodes( [...nodes.slice(0, targetNodeIndex), insertOpeningNode, insertClosingNode, ...nodes.slice(targetNodeIndex, nodes.length)]);
    };
}

export const RunbookEdge = ({
                                id, sourceX, sourceY, targetX, targetY, sourcePosition,
                                targetPosition, style, markerEnd,
                            }: EdgeProps) => {

    const [edgePath, edgeCenterX, edgeCenterY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });


    const onClick = useEdgeClick(id);
    const addParallelTask = useEdgeClick2(id)

    return (
        <>
            <path id={id} className={"edgePath"} style={style} d={edgePath} markerEnd={markerEnd}/>
            <g transform={`translate(${edgeCenterX}, ${edgeCenterY})`}>
                <rect className={"edgeButton"} onClick={onClick} x={-22} y={-10} width={20} rx={4} ry={4} height={20}/>
                <text className={"edgeButtonText"} onClick={onClick} x={-16} y={6}>
                    +
                </text>
                <rect className={"edgeButton"} onClick={addParallelTask} x={2} y={-10} width={20} rx={4} ry={4}
                      height={20}/>
                <text className={"edgeButtonText"} onClick={addParallelTask} x={9} y={4}>
                    ||
                </text>
            </g>

        </>
    );
}
