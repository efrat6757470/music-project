
import React from 'react';
import * as Tone from 'tone';
import Key from './Key/Key';

// אפקטים
const chorus = new Tone.Chorus(4, 2.5, 0.5).start();
const reverb = new Tone.Reverb(1.5);

// טעינת דגימות האורגנית שלך
const organ = new Tone.Sampler({
  urls: {
    "C6": "C6.mp3",
    "C#6": "C%236.mp3",
    "D6": "D6.mp3",
    "D#6": "D%236.mp3",
    "E6": "E6.mp3",
    "F6": "F6.mp3",
    "F#6": "F%236.mp3",
    "G6": "G6.mp3",
    "G#6": "G%236.mp3",
    "A6": "A6.mp3",
    "A#6": "A%236.mp3",
    "B6": "B6.mp3",
    "C7": "C7.mp3",
    "C#7": "C%237.mp3",
    "D7": "D7.mp3",
    "D#7": "D%237.mp3",
    "E7": "E7.mp3",
    "F7": "F7.mp3",
    "F#7": "F%237.mp3",
    "G7": "G7.mp3",
    "G#7": "G%237.mp3",
    "A7": "A7.mp3",
    "A#7": "A%237.mp3",
    "B7": "B7.mp3",
    "C8": "C8.mp3"
  },
  baseUrl: "/samples/organ/",
}).connect(chorus).connect(reverb).toDestination();



// רשימת התווים
const notes = [
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6',
  'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7',
  'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8'
];

const Keyboard = () => {
  const playNote = (note) => {
    organ.triggerAttackRelease(note, '1s');
  };

  return (
    <div className="keyboard">
      {notes.map((note, i) => (
        <Key key={i} note={note} playNote={playNote} />
      ))}
    </div>
  );
};

export default Keyboard;


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