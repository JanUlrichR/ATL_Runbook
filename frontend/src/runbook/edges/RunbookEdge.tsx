import {EdgeProps, getBezierPath} from 'reactflow';

import './RunbookEdge.css'


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

    return (
        <>
            <path id={id} className={"edgePath"} style={style} d={edgePath} markerEnd={markerEnd}/>
            <g transform={`translate(${edgeCenterX}, ${edgeCenterY})`}>
                <rect className={"edgeButton"} x={-22} y={-10} width={20} rx={4} ry={4} height={20}/>
                <text className={"edgeButtonText"} x={-16} y={6}>
                    +
                </text>
                <rect className={"edgeButton"} x={2} y={-10} width={20} rx={4} ry={4}
                      height={20}/>
                <text className={"edgeButtonText"} x={9} y={4}>
                    ||
                </text>
            </g>

        </>
    );
}
