import React from 'react';

export default function Home() {
  return (
    <div className='content'>
      <h1>Home</h1>
      <div className='cardish'>
        <p>
          Welcome to Axel's repositiory of Medeco knowledge for the Lockpickers United.
          </p>
        <p>Click on a page above to see various pieces of information.
        </p>
        <img style={{height:500, width:500}} src="../../assets/images/LPU_Logo.png" alt="lpu logo" />
      </div>
    </div>
  );
}