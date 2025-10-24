
import React from 'react';
import "../../assets/style/pages.css";
import Padlock from "../../assets/images/omegapadlockwyte.jpg";
import Rim from "../../assets/images/omegarimbask.webp";


export default function Omega() {
  return (
    <div className='content'>
      <h2 style={{color:'#FFFAFA'}}>The Level IV: Omega</h2>
      <div className='cardish'>
        <p> Early on in medeco's history, all medeco locks were designated as one of four security levels. Common keyways are considered Level 1. Restricted that locksmiths can copy and make keys for are level 2. Factory restricted are considered level 3. </p>
        <p> Level four was left for the omegas. Locks that had unique keyways that only one key would fit. That key would have limited number made and only that many would work with it. Meaning 10 keys made would be labeled 1 thru 10. Medeco nor their locksmiths would be allowed to make more of these keys. </p>
        <p> Being that Omega locks were set with a limited number of keys and no copys were allowed, Level four means factory restricted uncopyable keys were as high security as you can get. This concept was thought to be attributed to Elvis Flores and Roy Oliver. It is rumored that they had a few customers that wanted a lock whos key was unique only to them. Some have said that its security was closely guarded within MEDECO as well, but no evidence has been found to confirm it. What is known is that Omega locks were made on a unique assembly line and keys for them were made in limited quanities and thrown out or destroyed after the ordered amount were made. The keys were also made unique to the lock, these keyways were not used on other original locks. </p>
  </div>
  <div className='cardish'>
  <p> <img src={Padlock} alt="Omega padlock" style={{width: '50%'}} /> </p> <p> Image provided by Wyte from LPU Discord </p>
  <p> <img src={Rim} alt="Omega Rim Cylinder" style={{width: '50%'}} /> </p> <p> Image provided by Bask from LPU Discord </p>
  
  </div>
    );
};
