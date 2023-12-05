import './Image.css'
import React, {useEffect, useState, useRef} from 'react';
import { createWorker } from 'tesseract.js';

import translate from "translate";
translate.engine = "deepl";
translate.key = "get your own key from deepl:)";

const Image = () => {
    //translateText();
    const videoRef = useRef();
    const canvasRef = useRef();
    const [translatedLanguage, setLang] = useState("es");
    const [file, setFile] = useState();
    const [text, setText] = useState("N/A");
    const [translatoorText, setTText] = useState("N/A");
    const GetText = async () => {
        const worker = await createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(file);
        await worker.terminate();
        setText(text);
        const translooterText = await translate(text, translatedLanguage);
        setTText(translooterText);
        return(0);
    }
    const handleChange = async (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        const returnVal = await GetText();
    }
    return (
        <div className="main_content">
            <div className="intro">
                <h1> Image </h1>
                <h4>Add Image:</h4>
                <input type="file" onChange={handleChange} />
                <select onChange={(e) => setLang(e.target.value)}>
                    <option value="es"> Español </option>
                    <option value="en"> English </option>
                    <option value="zh"> 普通话 </option>
                </select>
                <div className="transcripts">
                <p>{text}</p>
                <p>{translatoorText}</p>
                </div>
            </div>
        </div>
    );
}
export default Image;

