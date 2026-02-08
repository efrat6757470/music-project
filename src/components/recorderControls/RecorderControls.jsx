import React, { useState, useRef } from 'react';
import { organ } from '../keyboard/Keyboard';
import * as Tone from 'tone';

const RecorderControls = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState(null); // URL של ההקלטה להאזנה
  const recordedChunks = useRef([]);
  const mediaRecorder = useRef(null);

  const startRecording = async () => {
    await Tone.start(); // צריך ל־Tone להתחיל את ההקשר
    const dest = Tone.context.createMediaStreamDestination();
    organ.connect(dest);

    mediaRecorder.current = new MediaRecorder(dest.stream);
    recordedChunks.current = [];

    mediaRecorder.current.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.current.push(e.data);
    };

    mediaRecorder.current.start();
    setIsRecording(true);
    setRecordedUrl(null); // איפוס הקלטות קודמות
  };

  const stopRecording = () => {
    mediaRecorder.current.stop();
    setIsRecording(false);

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url); // שמירת ה־URL להאזנה
    };
  };

  const downloadRecording = () => {
  if (!recordedUrl) return;
  const a = document.createElement('a');
  a.href = recordedUrl;
  a.download = 'recording.wav';
  a.click();
  
  // לאחר ההורדה - איפוס ההקלטה
  setRecordedUrl(null);
};

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'עצור הקלטה' : 'התחל הקלטה'}
      </button>

      {recordedUrl && (
        <div style={{ marginTop: '10px' }}>
          <audio controls src={recordedUrl} />
          <button onClick={downloadRecording}>הורד הקלטה</button>
        </div>
      )}
    </div>
  );
};

export default RecorderControls;
