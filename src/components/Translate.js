import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Translate.css";
import translate from "translate";
translate.engine = "deepl";
translate.key = "get your own key from deepl:)";
const Translate = () => {
  // SpeechRecognition.startListening({ language: 'zh-CN' })
  // can set language with this wowzers!
  // speaker section + translated section 
  // can split the transcript in half, with one half in english
  // and one half the translate
  // some way to signify --> I don't understand. 
  // have a langugae text detection tab as well 
  // when you make an account, select your default language 
  // this will change the language of the website cus rn it's still in English
  // maybe just have icons for each of the tabs 
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

  return (
    <div className="translate_content">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className="microphone_buttons"> 
        <button className="buttonlog2" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="buttonlog2" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="buttonlog2" onClick={resetTranscript}>Reset</button>
      </div>
      <div className="transcripts">
        <div><p>{transcript}</p></div>
        <div><p>{translatoorText}</p></div>
      </div>
    </div>
  );
};
export default Translate;