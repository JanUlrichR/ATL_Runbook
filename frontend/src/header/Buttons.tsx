import "./Buttons.css"
import SettingsIcon from '@mui/icons-material/Settings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {IconButton} from "@mui/material";
export const Buttons = () => {

    return (
        <div className={'button-items'}>
            <IconButton><SettingsIcon/></IconButton>
            <IconButton><PostAddIcon/></IconButton>
        </div>
    );
};