import React from "react";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";

export const FailureIcon: React.FC = ({}) => {
    return (
        <CrossCircleIcon size={'xlarge'} label={"Failed"} primaryColor={'red'}/>
    )
}