export const initialNodes = [
    {
        id: 'start',
        type: 'initial',
        data: {},
        position: {x: 100, y: 0},
        width:50,
        height:50
    }, {
        id: 'goal',
        type: 'goal',
        data: {},
        position: {x: 100, y: 500},
        width:50,
        height:50
    }
]

export const initialEdges = [{id: 'start->goal', source: 'start',sourceHandle :"out", target: 'goal',targetHandle: "in", type: 'runbook'}];