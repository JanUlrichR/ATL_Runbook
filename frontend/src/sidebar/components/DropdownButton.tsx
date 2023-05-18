import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, ClickAwayListener, Popper} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {anchorRef, bindPopper, bindToggle, usePopupState} from "material-ui-popup-state/hooks";

type DropdownButtonOption = {
    content: any;
    onClick: () => void;
}

export const DropdownButton: React.FC<{ options: DropdownButtonOption[] }> = ({options}) => {
    //TODO make sure at least one item
    const [selectedOption, setSelectedOption] = useState(options[0])


    const popupState = usePopupState({
        variant: "popper",
        popupId: "dropdown-popper"
    });
    const triggerRef = useRef(null);

    useEffect(() => {
        anchorRef(popupState)(triggerRef.current);
    }, [triggerRef, popupState]);


    const popper = <Popper
        placement="bottom-start"
        disablePortal={false}
        {...bindPopper(popupState)}
    >
        <ClickAwayListener onClickAway={() => popupState.close()}>
            <ButtonGroup orientation="vertical">
                {options.map(it => <Button onClick={() => {
                    setSelectedOption(it);
                    popupState.close()
                }}>{it.content}</Button>)}
            </ButtonGroup>

        </ClickAwayListener>
    </Popper>


    return <>
        <ButtonGroup>
            <Button ref={triggerRef} onClick={selectedOption.onClick}>{selectedOption.content}</Button>
            <Button {...bindToggle(popupState)}><KeyboardArrowDownIcon/></Button>
        </ButtonGroup>
        {popper}
    </>

}