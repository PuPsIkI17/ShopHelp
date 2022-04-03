import React, { useEffect } from "react";
import {useSpeechSynthesis} from "react-speech-kit";
import {Button} from 'react-bootstrap';
import styles from "../styles/water.css"


const Speech = (props) => {

    const calledOnce = React.useRef(0);
    const {speak} = useSpeechSynthesis();
    useEffect(() => {
        if (calledOnce.current >= 2) {
            return;
        }
        setTimeout(function() { 
            speak({text: props.description})
        }, 2000)
        calledOnce.current +=1;
    })


    return (
        <div className="speech">
            <div className="group">
            </div>
            <div className="group">
                <Button className="ms-4" variant="success" onClick={() => speak({text: props.description})}  style={styles.button}>
                    Speech
                </Button>
            </div>
        </div>
    );
};
export default Speech;
