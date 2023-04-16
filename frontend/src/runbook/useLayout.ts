import {useEffect} from "react";
import {getIncomers} from "reactflow";
import {timer} from "d3-timer";
import {useStore} from "./store";


const options = {duration: 300};

export const useLayout = (middleXpos: number) => {
    const {nodes, edges, getNode, getEdge, setNodes} = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges,
        getNode: state.getNode,
        getEdge: state.getEdge,
        setNodes: state.setNodes,
        setEdges: state.setEdges
    }))

    useEffect(() => {
        const nodesQueue = [...nodes]
        const newNodesMap = new Map()

        while (nodesQueue.length > 0) {
            const currentNode = nodesQueue.shift()!;
            const parents = getIncomers(currentNode, nodes, edges)
            const hasParents = parents.length !== 0

            if (parents.some(node => !newNodesMap.has(node.id))) {
                nodesQueue.push(currentNode)
            } else {
                let x = middleXpos
                const firstParent = parents[0]
                if (currentNode.type === "parallelClosing") {
                    const openingNodeId = currentNode.data.openingNodeId
                    if (!newNodesMap.has(openingNodeId)) {
                        nodesQueue.push(currentNode)
                        continue
                    }
                    x = newNodesMap.get(openingNodeId).to.x
                } else if (firstParent && firstParent.type === "parallel") {
                    const parallelTasks = firstParent.data.parallelTasks + 1
                    const connectingEdge = getEdge(`${firstParent.id}->${currentNode.id}`)
                    const sourceHandle = Number(connectingEdge?.sourceHandle?.substring(1))
                    x = newNodesMap.get(firstParent.id).to.x + (sourceHandle + 1) * firstParent.width! / parallelTasks - currentNode.width! / 2
                } else if (firstParent) {
                    x = newNodesMap.get(firstParent.id).to.x + firstParent.width! / 2 - currentNode.width! / 2
                }

                const newPosition = {
                    x,
                    y: hasParents ? Math.max(...parents.map(parent => newNodesMap.get(parent.id)).map(n => n.to.y)) + 100 : 0
                }
                newNodesMap.set(currentNode.id, {
                    id: currentNode.id,
                    from: getNode(currentNode.id)?.position || newPosition,
                    to: newPosition,
                    node: currentNode
                })
            }
        }

        const animations = Array.from(newNodesMap.values())

        const t = timer(elapsed => {
            const animationPercentage = elapsed / options.duration

            const animatedNodes = animations.map(animation => ({
                ...animation.node,
                position: {
                    x: animation.from.x + (animation.to.x - animation.from.x) * animationPercentage,
                    y: animation.from.y + (animation.to.y - animation.from.y) * animationPercentage,
                }
            }))
            setNodes(animatedNodes)

            if (elapsed > options.duration) {
                const finalNodes = animations.map(animation => ({
                    ...animation.node,
                    position: {
                        x: animation.to.x,
                        y: animation.to.y,
                    }
                }))

                setNodes(finalNodes)

                t.stop()
            }
        })

        return () => {
            t.stop()
        }
    }, [nodes.length, getNode, setNodes, middleXpos])
}