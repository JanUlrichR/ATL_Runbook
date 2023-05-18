import React from "react";
import {Node} from "reactflow";
import {Editor} from "./Editor";
import {SidebarHeader} from "./SidebarHeader";

export const Sidebar: React.FC<{ selectedTask: Node | undefined; dismissTask: () => void }> = ({
                                                                                                   selectedTask,
                                                                                                   dismissTask
                                                                                               }) => {
    if (selectedTask) {
        return <div style={{margin: '10px'}}>
            <SidebarHeader title={"New Step"} onClose={dismissTask} onDelete={() => {}}/>
            <Editor/>
        </div>
    } else {
        return null
    }
}