import React from 'react';
import Logo from '../../assets/images/LPU_Logo.png'

export default function Home() {
  return (
    <div className='content'>
      <h1>Home</h1>
      <div className='cardish'>
        <p>
          Welcome to Axel's repositiory of Medeco knowledge for the Lockpickers United.
          </p>
          <p>
          </p>
        <p>Click on a page above to see various pieces of information.
        </p>
        <img src={Logo} style={{width:200, height:200, padding:15}} alt="lpu logo" />
        <p></p>
      </div>
    </div>
  );
}