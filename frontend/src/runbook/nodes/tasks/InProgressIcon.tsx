import React, {useRef} from "react";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";
import "./InProgressIcon.css"

//https://loading.io/spinner/rolling/-bar-circle-curve-round-rotate
// free to use licence for any purpose

export const InProgressIcon: React.FC = ({}) => {
    const circleRef = useRef<HTMLDivElement>(null)
    const size = 'xlarge'
    const reducedRadius = 8;
    return (
        <div>
            <div ref={circleRef}>
                <CrossCircleIcon size={size} label={"InProgress"} primaryColor={'blue'} secondaryColor={'blue'}/>
            </div>
            <div className={"in-progress-spinner"} style={{left:`${reducedRadius}px`, top:`${reducedRadius}px`}}>
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio={"xMidYMid"} viewBox={"0 0 100 100"}
                     style={{
                         margin: "auto",
                         background: "none",
                         display: "block",
                         shapeRendering: "auto",

                         width: circleRef.current ? circleRef.current.offsetWidth-2*reducedRadius : 0,
                         height: circleRef.current ? circleRef.current.offsetHeight-2*reducedRadius : 0
                     }}>
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth="10" r="35"
                            strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                          dur="1.5873015873015872s" values="0 50 50;360 50 50"
                                          keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </div>
        </div>

    )
}