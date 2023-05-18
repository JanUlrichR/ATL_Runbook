
import {useState} from "react";
import "./Title.css"
import InlineEdit from "@atlaskit/inline-edit";
export const Title = () => {
    const [title, setTitle] = useState("Confluence Update")
    // TODO add Typogrphy as much as possible for text display
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