import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Translate;