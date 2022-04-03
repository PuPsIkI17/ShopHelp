import React, { useEffect } from "react";
import {useSpeechSynthesis} from "react-speech-kit";
import {Button} from 'react-bootstrap';
import styles from "../styles/water.css"


const Speech = (props) => {
    const {speak} = useSpeechSynthesis();
    useEffect(() => {
        setTimeout(function() { 
            //speak({text: props.description})
        }, 2000)
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
