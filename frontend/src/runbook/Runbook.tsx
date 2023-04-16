import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import {RFState, useStore} from "./store";
import {useLayout} from "./useLayout";

const selector = (state: RFState) => ({
    nodes: state.nodes,
    selectedNode: state.selectedNode,
    edges: state.edges,
    nodeTypes: state.nodeTypes,
    edgeTypes: state.edgeTypes,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

const Runbook = () => {
    const {nodes, nodeTypes, onNodesChange, edges, edgeTypes, onEdgesChange} = useStore(selector)

    useLayout(50)
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
