import React from 'react';
import Lpu from '../../assets/images/LPU_Logo.png'
import Logo from '../../assets/images/onlypins_logo.png'

export default function Home() {
  return (
    <div className='content'>
      <h1 style={{color:'#FFFAFA'}}>Home</h1>
      <div className='cardish'>
        <p>
          Welcome to onlyPins's repositiory of Medeco knowledge.

          <h2> webpage is undergoing some changes, please stand by </h2>
          </p>
          <p>
          </p>
        <p>Click on a page above to see various pieces of information.
        </p>
        <img src={Lpu} style={{width:200, height:200, padding:15}} alt="lpu logo" /> <img src={Logo} style={{width:300, padding:15}} alt="onlypins logo" />
        <p></p>
      </div>
    </div>
  );
}