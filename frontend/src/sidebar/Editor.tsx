import React from "react";
import {EditorContent} from "@tiptap/react";
import {useEditor} from "./useEditor";
import {EditorBar} from "./components/EditorBar";
import {Paper} from "@mui/material";


// TODO https://mui.com/material-ui/react-toggle-button/#CustomizedDividers.tsx
export const Editor: React.FC<{}> = () => {

    const editor = useEditor("")
    if (!editor) return <>LOADING</>
    return <Paper
        elevation={0}
        sx={{
            display: 'flex',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: 'wrap',
        }}>
        <EditorBar editor={editor}/>
        <div style={{margin:"0 5px 0 5px"}}>
            <EditorContent editor={editor}/>
        </div>
    </Paper>
}