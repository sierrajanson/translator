import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Translate.css";
import "../App.css";
import translate from "translate";
translate.engine = "deepl";
translate.key = "acafd98e-612f-7389-d94b-67c8e9846129:fx";
const Translate = () => {
  const [msgToSpeaker, updateMsg] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [translatedLanguage, setLang] = useState("es");
  
  const [translatoorText, setTText] = useState();
  const GetText = async () => {
    const translooterText = await translate(transcript, translatedLanguage);
    setTText(translooterText);
    return(0);
  }

  useEffect(()=>{
    GetText();
  });
  //({continuous: true})
  return (
    <div className="translate_content">
      <h1> Micrófono | Microphone </h1>
      <h4>{msgToSpeaker}</h4>
      <div className="subHeaderMic">
        <h4>Microphone: {listening ? 'encendido/on' : 'apagado/off'}</h4>
        <div>
          <h4 className="languageheader">Idioma/Language:</h4> 
          <select onChange={(e) => setLang(e.target.value)}>
            <option value="es"> Español </option>
            <option value="zh"> 普通话 </option>
        </select>
        </div>
      </div>
      <div className="microphone_buttons"> 
        <button className="buttonlog2" onClick={SpeechRecognition.startListening}>Inicio<br></br>Start</button>
        <button className="buttonlog2" onClick={SpeechRecognition.stopListening}>Alto <br></br>Stop</button>
        <button className="buttonlog2" onClick={resetTranscript}>Reiniciar<br></br>Reset</button>
        <button classname="buttonlog2" onClick={(e)=>updateMsg("I don't understand.")}>No entiendo<br></br>I don't understand</button>
        <button classname="buttonlog2" onClick={(e)=>updateMsg("Please speak more slowly.")}>Habla más despacio<br></br>Slow down please</button>

      </div>
      <div className="transcripts">
        <div><p>{transcript}</p></div>
        <div><p>{translatoorText}</p></div>
      </div>
    </div>
  );
};
export default Translate;