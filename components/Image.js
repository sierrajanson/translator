import './Image.css';
import "../App.css";

import React, {useEffect, useState, useRef} from 'react';
import { createWorker } from 'tesseract.js';

import translate from "translate";
translate.engine = "deepl";
translate.key = "acafd98e-612f-7389-d94b-67c8e9846129:fx";

const Image = () => {
    //translateText();
    const videoRef = useRef();
    const canvasRef = useRef();
    const [translatedLanguage, setLang] = useState("es");
    const [file, setFile] = useState("N/A");
    const [text, setText] = useState();
    const [translatoorText, setTText] = useState("N/A");
    const GetText = async () => {
        if (file != undefined){
        const worker = await createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        console.log(file);
        const { data: { text } } = await worker.recognize(file);
        await worker.terminate();
        setText(text);
        const translooterText = await translate(text, translatedLanguage);
        setTText(translooterText);
        return(0);
        }
    }
    useEffect(()=>{
        if (file != undefined && file != "N/A"){
            const returnVal = GetText();
        }
    },[file]);

    const handleChange = async (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        //console.log(returnVal);
    }
    return (
        <div className="translate_content">
                <h1> Image </h1>
                <div className="subHeaderMic">
                    <h4>Subir Imagen/Add Image:</h4>
                    <input type="file" onChange={handleChange} />
                    <div>
                        <h4 className="languageheader">Idioma/Language:</h4> 
                        <select onChange={(e) => setLang(e.target.value)}>
                                    <option value="es"> Español </option>
                                    <option value="zh"> 普通话 </option>
                        </select>
                    </div>
                </div>
                <div className="transcripts">
                    <p>{text}</p>
                    <p>{translatoorText}</p>
                </div>
        </div>
    );
}
export default Image;

