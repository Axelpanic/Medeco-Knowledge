import React from 'react';
import "../../assets/style/pages.css";

export default function About() {
  return (
    <div className='content'>
      <h2>The Differences in designs</h2>
      <div className='cardish'>
        <p> 
            MEDECO has four main variations of locks. These are the ORIGINAL, BIAXIAL, MEDECO3, and MEDECO4
            </p>
        <p>
            <h4> Medeco Classic</h4>
        </p>
        <p> 
          The Medeco Classic comes with a few different driver pin types: Mushroom style and Standard style.
        </p>
        <p>
        <img src={'../../assets/images/patent 1970 blownup.png'} alt={"patent of medeco classic"} />
        </p>
        <p> 
          The 'V' shaped pins make for easy spinning and manipulation as opposed to later versions.
        </p>
      </div>
    </div>
  );
}