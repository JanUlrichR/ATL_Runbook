import React from "react";
import './SidebarHeader.css'
import {IconButton, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

export const SidebarHeader: React.FC<{title: string, onClose: () => void, onDelete: () => void}> = ({title, onClose, onDelete}) => {
    return (
        <div className={'sidebar-header-container'}>
            <div className={'sidebar-title'}>
                <Typography> {title} </Typography>
            </div>
            <div className={'sidebar-buttons'}>
                <div className={"sidebar-button-items"}>
                    <IconButton onClick={onClose}><CloseIcon/></IconButton>
                    <IconButton onClick={onDelete}><DeleteIcon/></IconButton>
                </div>
            </div>
        </div>
    );
};