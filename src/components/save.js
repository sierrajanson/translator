import './Image.css'
import React, {useEffect, useState, useRef} from 'react';
import { createWorker } from 'tesseract.js';
import Lovely from "../assets/rub.png"
const Image = () => {
    const videoRef = useRef();
    const canvasRef = useRef();
    
    const [text, setText] = useState();
    const GetText = async () => {
        const worker = await createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(Lovely);
        await worker.terminate();
        setText(text);
        //YAYYYYYYYYYYYYYYYYYYYYYYYYY IT'S WORKING BABY
    }
    useEffect(()=> {GetText();});
    

    
    return (
        <div className="main_content">
            <div className="intro">
                <h1> Image </h1>
                <p>{text}</p>
                <video> </video>
            </div>
        </div>
    );
}
export default Image;

