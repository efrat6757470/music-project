import React from 'react';
import './Key.css';

const Key = ({ note, playNote }) => {
  const isSharp = note.includes('#');

  return (
    <div
      className={`key ${isSharp ? 'black' : 'white'}`}
      onClick={() => playNote(note)}
    />
  );
};

export default Key;


// for pley time by click
// const Key = ({ note, playNote, stopNote }) => {
//   const isSharp = note.includes('#');

//   return (
//     <div
//       className={`key ${isSharp ? 'black' : 'white'}`}
//       onMouseDown={playNote}       // לוחצים → מתחיל צליל
//       onMouseUp={stopNote}         // משחררים → מפסיק צליל
//       onMouseLeave={stopNote}      // משחרים בעכבר → מפסיק צליל
//     />
//   );
// };
// export default Key;

