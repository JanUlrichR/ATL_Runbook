import React from "react";
import LockCircleIcon from "@atlaskit/icon/glyph/lock-circle";
export const LockedIcon: React.FC = ({}) => {
    return (
        <LockCircleIcon size={'xlarge'} label={"Locked"} primaryColor={'orange'}/>
    )
}