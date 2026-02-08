import React from 'react';
import * as Tone from 'tone';
import Key from '../Key/Key';
import RecorderControls from '../recorderControls/RecorderControls';

// אפקטים
const chorus = new Tone.Chorus(4, 2.5, 0.5).start();
const reverb = new Tone.Reverb(1.5);

// Envelope – מגדיר את זמן ההתקפה והשחרור
const envelope = {
  attack: 0.01,
  decay: 0.1,
  sustain: 1.0,
  release: 0.3
};

// טעינת דגימות האורגנית עם Envelope
export const organ = new Tone.Sampler({
  urls: {
    "C6": "C6.mp3", "C#6": "C%236.mp3", "D6": "D6.mp3", "D#6": "D%236.mp3",
    "E6": "E6.mp3", "F6": "F6.mp3", "F#6": "F%236.mp3", "G6": "G6.mp3",
    "G#6": "G%236.mp3", "A6": "A6.mp3", "A#6": "A%236.mp3", "B6": "B6.mp3",
    "C7": "C7.mp3", "C#7": "C%237.mp3", "D7": "D7.mp3", "D#7": "D%237.mp3",
    "E7": "E7.mp3", "F7": "F7.mp3", "F#7": "F%237.mp3", "G7": "G7.mp3",
    "G#7": "G%237.mp3", "A7": "A7.mp3", "A#7": "A%237.mp3", "B7": "B7.mp3",
    "C8": "C8.mp3"
  },
  baseUrl: "/samples/organ/",
  envelope
}).connect(chorus).connect(reverb).toDestination();

// רשימת התווים
const notes = [
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6',
  'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7',
  'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8'
];

const Keyboard = () => {

  // שמירת זמני התחלה של התווים
  const startTimes = {};

  const handleMouseDown = async (note) => {
  await Tone.start(); // מבטיח שהקונטקסט פעיל
  organ.triggerAttack(note);
  organ._startTimes = organ._startTimes || {};
  organ._startTimes[note] = Tone.now();
};


  const handleMouseUp = (note) => {
    const startTime = startTimes[note] || Tone.now();
    const duration = Tone.now() - startTime; // אורך הלחיצה בפועל
    organ.triggerRelease(note); // מפסיק לנגן
    // כאן אפשר לשמור את duration אם רוצים להקליט
    console.log(`Note ${note} lasted ${duration.toFixed(2)}s`);
  };

  return (
    <div>
      <div className="keyboard">
        {notes.map((note, i) => (
          <Key
            key={i}
            note={note}
            onMouseDown={() => handleMouseDown(note)}
            onMouseUp={() => handleMouseUp(note)}
            onMouseLeave={() => handleMouseUp(note)}
          />
        ))}
      </div>
      <RecorderControls/>
    </div>
  );
};

export default Keyboard;




// import React from 'react';
// import * as Tone from 'tone';
// import Key from '../Key/Key';
// import RecorderControls from '../recorderControls/RecorderControls';

// // אפקטים
// const chorus = new Tone.Chorus(4, 2.5, 0.5).start();
// const reverb = new Tone.Reverb(1.5);

// // טעינת דגימות האורגנית שלך
// export const organ = new Tone.Sampler({
//   urls: {
//     "C6": "C6.mp3",
//     "C#6": "C%236.mp3",
//     "D6": "D6.mp3",
//     "D#6": "D%236.mp3",
//     "E6": "E6.mp3",
//     "F6": "F6.mp3",
//     "F#6": "F%236.mp3",
//     "G6": "G6.mp3",
//     "G#6": "G%236.mp3",
//     "A6": "A6.mp3",
//     "A#6": "A%236.mp3",
//     "B6": "B6.mp3",
//     "C7": "C7.mp3",
//     "C#7": "C%237.mp3",
//     "D7": "D7.mp3",
//     "D#7": "D%237.mp3",
//     "E7": "E7.mp3",
//     "F7": "F7.mp3",
//     "F#7": "F%237.mp3",
//     "G7": "G7.mp3",
//     "G#7": "G%237.mp3",
//     "A7": "A7.mp3",
//     "A#7": "A%237.mp3",
//     "B7": "B7.mp3",
//     "C8": "C8.mp3"
//   },
//   baseUrl: "/samples/organ/",
// }).connect(chorus).connect(reverb).toDestination();



// // רשימת התווים
// const notes = [
//   'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6',
//   'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
//   'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7',
//   'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8'
// ];

// const Keyboard = () => {
//   const playNote = (note) => {
//     organ.triggerAttackRelease(note, '1s');
//   };

//   return (
//     <div>
//     <div className="keyboard">
//       {notes.map((note, i) => (
//         <Key key={i} note={note} playNote={playNote} />
//       ))}
//       </div>
//       <RecorderControls/>
//     </div>
//   );
// };

// export default Keyboard;


//whis time of play by click
// import React from 'react';
// import * as Tone from 'tone';
// import Key from './Key/Key';

// // אפקטים
// const chorus = new Tone.Chorus(4, 2.5, 0.5).start();
// const reverb = new Tone.Reverb(1.5);

// // טעינת דגימות האורגנית
// const organ = new Tone.Sampler({
//   urls: {
//     "C6": "C6.mp3",
//     "C#6": "C%236.mp3",
//     "D6": "D6.mp3",
//     "D#6": "D%236.mp3",
//     "E6": "E6.mp3",
//     "F6": "F6.mp3",
//     "F#6": "F%236.mp3",
//     "G6": "G6.mp3",
//     "G#6": "G%236.mp3",
//     "A6": "A6.mp3",
//     "A#6": "A%236.mp3",
//     "B6": "B6.mp3",
//     "C7": "C7.mp3",
//     "C#7": "C%237.mp3",
//     "D7": "D7.mp3",
//     "D#7": "D%237.mp3",
//     "E7": "E7.mp3",
//     "F7": "F7.mp3",
//     "F#7": "F%237.mp3",
//     "G7": "G7.mp3",
//     "G#7": "G%237.mp3",
//     "A7": "A7.mp3",
//     "A#7": "A%237.mp3",
//     "B7": "B7.mp3",
//     "C8": "C8.mp3"
//   },
//   baseUrl: "/samples/organ/",
// }).connect(chorus).connect(reverb).toDestination();

// const notes = [
//   'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6',
//   'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
//   'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7',
//   'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8'
// ];

// const Keyboard = () => {

//   const handleMouseDown = (note) => {
//     organ.triggerAttack(note); // מתחיל לנגן את הצליל
//   };

//   const handleMouseUp = (note) => {
//     organ.triggerRelease(note); // מפסיק את הצליל
//   };

//   return (
//     <div className="keyboard">
//       {notes.map((note, i) => (
//         <Key 
//   key={i} 
//   note={note} 
//   playNote={() => handleMouseDown(note)}
//   stopNote={() => handleMouseUp(note)}
// />

//       ))}
//     </div>
//   );
// };

// export default Keyboard;