import React from "react";
import {useSpeechSynthesis} from "react-speech-kit";
import styles from "../styles/water.css"

const Speech = (props) => {
    const {speak} = useSpeechSynthesis();
    console.log(props)
    return (
        <div className="speech">
            <div className="group">
            </div>
            <div className="group">
                <button onClick={() => speak({text: props.description})} style={styles.button}>
                    Speech
                </button>
            </div>
        </div>
    );
};
export default Speech;
