import InlineEdit from '@atlaskit/inline-edit';
import {useState} from "react";
import "./Title.css"
export const Title = () => {
    const [title, setTitle] = useState("Confluence Update")

    return (
        <div className={"titleText"}>
            <InlineEdit readView={() => <div className={'readView'}>{title}</div>}
                        editView={(props, ref) => (
                            <input className={'editView'} {...props} ref={ref} />
                        )}
                        defaultValue={title}
                        onConfirm={setTitle}/>
        </div>
    );
};