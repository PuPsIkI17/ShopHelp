import React from "react";
import {useSpeechSynthesis} from "react-speech-kit";
import {Button} from 'react-bootstrap';

const Speech = (props) => {
    const {speak} = useSpeechSynthesis();
    console.log(props)
    return (
        <div className="speech">
            <div className="group">
            </div>
            <div className="group">
                <Button className="ms-4" variant="success" onClick={() => speak({text: props.description})}>
                    Speech
                </Button>
            </div>
        </div>
    );
};
export default Speech;
