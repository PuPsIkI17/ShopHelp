import React from "react";
import {useSpeechSynthesis} from "react-speech-kit";

const Speech = (props) => {
    const {speak} = useSpeechSynthesis();
    console.log(props)
    return (
        <div className="speech">
            <div className="group">
            </div>
            <div className="group">
                <button onClick={() => speak({text: props.description})}>
                    Speech
                </button>
            </div>
        </div>
    );
};
export default Speech;
