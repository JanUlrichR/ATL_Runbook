import React from "react";
import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";

export const SuccessIcon: React.FC = ({}) => {
    return (
        <CheckCircleIcon size={'xlarge'} label={"Success"} primaryColor={'green'}/>
    )
}