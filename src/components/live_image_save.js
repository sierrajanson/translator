import React, { useRef, useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

const TextRecognition = () => {
  //this entire page is from chatGPT
  const videoRef = useRef();
  const canvasRef = useRef();
  let mediaStream = null;
  const [transcript, setTranscript] = useState('');
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        setIsCameraOn(true);
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      const tracks = mediaStream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
      setTranscript('');
    }
  };

  const recognizeText = async () => {
    if (isCameraOn) {
      const interval = setInterval(async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video && canvas) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          try {
            const { data: { text } } = await Tesseract.recognize(canvas, 'eng');
            setTranscript(text);
          } catch (error) {
            console.error('Error recognizing text:', error);
          }
        }
      }, 5000); // Adjust the interval as needed for real-time performance

      return () => clearInterval(interval);
    }
  };

  useEffect(() => {
    recognizeText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCameraOn]);

  return (
    <div>
      {isCameraOn ? (
        <button onClick={stopCamera}>Turn Off Camera</button>
      ) : (
        <button onClick={startCamera}>Turn On Camera</button>
      )}
      <video ref={videoRef} width="400" height="300" autoPlay></video>
      <div>
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default TextRecognition;
