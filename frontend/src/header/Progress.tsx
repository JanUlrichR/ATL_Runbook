import ProgressBar from '@atlaskit/progress-bar';
import Badge from "@atlaskit/badge";
import './Progress.css'

export const ProgressBarHeader = () => {
    const openItems = 100
    const doneItems = 50
    return (
        <div className={'progress-bar'}>
            <Badge appearance="added" max={false}>
                {doneItems}
            </Badge>
            <ProgressBar
                appearance="success"
                ariaLabel="Done: 10 of 10 issues"
                value={doneItems/(openItems+doneItems)}
            />
            <Badge appearance="removed" max={false}>
                {openItems}
            </Badge>
        </div>
    );
};
