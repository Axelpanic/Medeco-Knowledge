import React from 'react';
import "../../assets/style/pages.css";
import Lpu from '../../assets/images/LPU_Logo.png'
import Logo from '../../assets/images/onlypins_logo.png'
import Dislogo from '../../assets/images/discord_logo_512x512.png'
import Redlogo from '../../assets/images/reddit-logo-icon-1024x1024-215h6kce.png'

export default function Home() {
  return (
    <div className='content'>
      <h1 style={{color:'#FFFAFA'}}>Home</h1>
      <div className='cardish'>
        <p>
          Welcome to onlyPins's repository of Medeco knowledge.
          </p>
          <p>
          </p>
        <p>Click on a page above to see various pieces of information.
        </p>
        <p><img src={Lpu} style={{width:200, height:200, padding:15}} alt="lpu logo" /> <img src={Logo} style={{width:300, padding:15}} alt="onlypins logo" /></p>
        <p><a href="https://reddit.com/r/lockpicking"><img src={Redlogo} style={{width:50, height:50, padding:1}} alt="reddit link logo"/></a> <a href="https://discord.gg/5sfRmmS8"> <img src={Dislogo} style={{width:50, height:50, padding:1}} alt="discord link logo" /></a></p>
      </div>
    </div>
  );
}