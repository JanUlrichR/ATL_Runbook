import React, {useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState} from 'reactflow';
import 'reactflow/dist/style.css';

import nodeTypes from "./nodes";
import edgeTypes from "./edges";


const Runbook = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes([
            {
                id: 'initial',
                type: 'initial',
                data: {label: 'An input node'},
                position: {x: 0, y: 50},
            },

            {
                id: 'goal',
                type: 'goal',
                data: {label: 'Output A'},
                position: {x: 650, y: 25},
            },
        ]);

        setEdges([
            {
                id: 'initial->goal',
                source: 'initial',
                target: 'goal',
                type: 'runbook'
            }
        ]);
    }, []);

    return (
        <div style={{width:"500px", height:"500px"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            >
            </ReactFlow>
        </div>
    );
};

export default Runbook;
