import React from 'react';
import ReactFlow, {NodeMouseHandler, Node} from 'reactflow';
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

const Runbook: React.FC<{selectedTask:Node|undefined;selectTask: (node: Node | undefined) => void, dismissTask:() => void}> = ({selectedTask, selectTask, dismissTask})  => {
    const {nodes, nodeTypes, onNodesChange, edges, edgeTypes, onEdgesChange} = useStore(selector)

    useLayout(50)

    const onNodeClick: NodeMouseHandler = (evt, node:Node) => {
        if (selectedTask?.id === node.id) {
            dismissTask()
        }else if(['task', 'initial', 'goal'].includes(node.type!)){
            selectTask(node)
        }
    }

    return (
        <div style={{width:"100%", height:"100%"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodeClick={onNodeClick}
                onPaneClick={dismissTask}
                fitView
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnDoubleClick={false}
            >
            </ReactFlow>
        </div>
    );
};

export default Runbook;
