import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges, Connection,
    Edge,
    EdgeChange, EdgeTypes,
    NodeChange,
    OnConnect,
    OnEdgesChange,
    OnNodesChange
} from "reactflow";
import {create} from "zustand";
import {Node, NodeTypes} from "@reactflow/core/dist/esm/types";
import nodeTypes from "./nodes";
import edgeTypes from "./edges";
import {initialEdges, initialNodes} from "./initalConfig";

export type RFState = {
    nodes: Node<any>[];
    selectedNode: Node | undefined;
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    nodeTypes?: NodeTypes;
    edgeTypes?: EdgeTypes;
    updateParallelTasks: (nodeId: string, parallelTasks: number) => void;
};

export const useStore = create<RFState>((set, get) => ({
    nodes: initialNodes,
    edges: initialEdges,
    nodeTypes: nodeTypes,
    edgeTypes: edgeTypes,
    selectedNode: undefined,
    onNodesChange: (changes: NodeChange[]) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    onConnect: (connection: Connection) => {
        set({
            edges: addEdge(connection, get().edges),
        });
    },
    updateParallelTasks: (nodeId: string, parallelTasks: number) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    node.data = {...node.data, parallelTasks: parallelTasks >= 1 ? parallelTasks : 1};
                }
                return node;
            }),
        });
    }
}));