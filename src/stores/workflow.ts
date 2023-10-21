import {
    Edge,
    Node,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
} from "reactflow";
import { create } from "zustand";

export type WorkflowState = {
    name: string;
    nodes: Node[];
    edges: Edge[];
};

type WorkflowActions = {
    setName: (name: string) => void;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
};

const defaultWorkflowState: WorkflowState = {
    name: "New workflow",
    nodes: [],
    edges: [],
};

const useWorkflowStore = create<WorkflowState & WorkflowActions>()((set) => ({
    ...defaultWorkflowState,
    setName: (name) => set({ name: name }),
    setNodes: (nodes) => set({ nodes: nodes }),
    setEdges: (edges) => set({ edges: edges }),
    onNodesChange: (changes) =>
        set((state) => ({ nodes: applyNodeChanges(changes, state.nodes) })),
    onEdgesChange: (changes) =>
        set((state) => ({ edges: applyEdgeChanges(changes, state.edges) })),
    onConnect: (connection) =>
        set((state) => ({ edges: addEdge(connection, state.edges) })),
}));

export default useWorkflowStore;
