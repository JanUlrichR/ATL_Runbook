import React from "react";
import {Editor} from "@tiptap/react";
import {Button, Paper} from "@mui/material";
import {DropdownButton} from "./DropdownButton";

import CodeIcon from '@mui/icons-material/Code';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const editorHeaderItems = [
    [...[1, 2, 3, 4, 5, 6].map(size => ({
        content: `Heading ${size}`,
        onClick: (editor: any) => editor.commands.toggleHeading({level: size})
    }))],
    [{content: <CheckBoxIcon/>, onClick: (editor: any) => editor.commands.toggleTaskList()}],
    [{content: <FormatListBulletedIcon/>, onClick: (editor: any) => editor.commands.toggleBulletList()}],
    [{content: <CodeIcon/>, onClick: (editor: any) => editor.commands.toggleCodeBlock()}],
    [{content: <FormatQuoteIcon/>, onClick: (editor: any) => editor.commands.toggleBlockquote()}],
    [{content: <UndoIcon/>, onClick: (editor: any) => editor.commands.undo()}],
    [{content: <RedoIcon/>, onClick: (editor: any) => editor.commands.redo()}],

]

export const EditorBar: React.FC<{ editor: Editor }> = ({editor}) => {

    console.log(editor.commands)

    return <Paper
        elevation={0}
        sx={{
            display: 'flex',
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: 'wrap',
        }}>
        {editorHeaderItems.map(item => {

            if (item.length === 1) {
                return <Button onClick={() => item[0].onClick(editor)}>{item[0].content}</Button>
            }
            return <DropdownButton
                options={item.map(el => ({...el, onClick: () => el.onClick(editor)}))}></DropdownButton>
        })}
    </Paper>
}