import "./Buttons.css"
import SettingsIcon from '@atlaskit/icon/glyph/settings'
import Button from '@atlaskit/button';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle'
export const Buttons = () => {

    return (
        <div className={'buttons'}>
            <Button
                iconBefore={ <SettingsIcon label={"administer"} />}
                appearance="subtle"
            />
            <Button
                iconBefore={ <AddCircleIcon label={"addRun"} />}
                appearance="subtle"
            />
        </div>
    );
};