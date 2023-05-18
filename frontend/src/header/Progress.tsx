
import './Progress.css'
import React from "react";
import {Badge, LinearProgress, linearProgressClasses, styled} from "@mui/material";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export const ProgressBarHeader = () => {
    const openItems = 100
    const doneItems = 50
    return (
        <div className={'progress-bar'}>
            <Badge badgeContent={doneItems} color="success">
                <CheckCircleIcon color="action" />
            </Badge>
            <BorderLinearProgress variant="determinate" value={doneItems/(openItems+doneItems) *100} />

            <Badge badgeContent={openItems} color="success">
                <PendingIcon color="action" />
            </Badge>
        </div>
    );
};
