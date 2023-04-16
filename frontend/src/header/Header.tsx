
import React from "react";
import './Header.css'
import {ProgressBarHeader} from "./Progress";
import {Title} from "./Title";
import {Buttons} from "./Buttons";

export const Header = () => {
    return (
        <div className={'header-container'}>
            <div className={'progress'}><ProgressBarHeader/></div>
            <div className={'title'}><Title/></div>
            <div className={'buttons'}><Buttons/></div>
        </div>
    );
};