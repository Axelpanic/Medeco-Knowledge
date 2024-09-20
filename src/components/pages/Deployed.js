import React from 'react';
import "../../assets/style/pages.css";

export default function About() {
  return (
    <div className='content'>
      <h2>Picking Theory</h2>
      <div className='cardish'>
        <p> 
            How to pick medecos
            </p>
            <p> The two main ways to pick the main medeco locks: Clockwise and Counter Clockwise. </p>
            <p> Clockwise is my favorite method. You attempt to set the rotation of the pins by lifting and push/pull the key pin. Once you are confedient in its rotation, push to sheer. Once you have done this with all the keypins and the driver pins are set to sheer, you should fall into a false set. This means one or more pins are in a false gate. Simply lighen tension a little bit and attempt to move the key pins into their true gate and the lock will open once they are fixed! Many say Clock wise is a harder method.
            </p>
            <p> 
              Counter clockwise is the most popular way to open medecos. This involves setting the rotations to the sidebar first. Once you can add firm tension and all the pins lift without resistance, you are set to sidebar. Add normal tension again and push the pins to sheer. 
            </p>
            <p> For a great resource, see Lockfall Labs video on the resource tab.</p>
      </div>
      <div className='cardish'>
        <p>
          <h2> Progressive Picking is a must!</h2>
        </p>
        <p>
          Now that you are into high security lock picking, you will have to learn to progressive pick. This involves removing whole pin stacks from the lock giving you a simple challenge without the full weight of the lock causing issues. I recommend starting with pins 3 and 4 only in the lock. Rotate them back and forth, lift to sheer, set them perfectly and test them out. By doing this, you understand how the whole lock will react as you pick it. Add one stack at a time, opening it over and over again to gain comfort and confedence in picking Medecos!
        </p>
        <p> The other thing you will need to learn is the Clicky test. See the Resoruce tab for a video on the clicky test.</p>
      </div>
    </div>
  );
}