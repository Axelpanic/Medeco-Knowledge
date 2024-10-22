import React from 'react';
import "../../assets/style/pages.css";

export default function About() {
  return (
    <div className='content'>
      <h2>Picking Theory</h2>
      <div className='cardish'>
        <p> 
            <h3>How to pick standard medecos, KIK and cylinder style. </h3>
            </p>
            <p> My favorite way to manipulate the pins has to do with the angles of the design. The Classic has V shaped key pins which are centered, meaning you can put a little pressure on either forward or aft of the pin and get rotations. The biaxial are offset, meaning that any lock from Biaxial to M4 will have pins facing you or away from you. I prefer to handle Bixaial keypins by pushing on either corner (left or right corner) as this rotates the pins easily. You can also pull with the lift using this method leading to even more rotation in corroded or damaged keyways.

            </p>
            <p> The two main ways to pick the main medeco locks: Clockwise and Counter Clockwise. </p>
            <p> Clockwise is my favorite method. You attempt to set the rotation of the pins by lifting and push/pull the key pin. Once you are confident in its rotation, push to sheer. Once you have done this with all the keypins and the driver pins are set to sheer, you should fall into a false set. This means one or more pins are in a false gate. Simply lighen tension a little bit and attempt to move the key pins into their true gate and the lock will open once they are fixed! Many say Clock wise is a harder method.
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
      <div className='cardish'>
        <p>
          <h3> Medeco Cam lock Picking theory</h3>
        </p>
        <p>
          First difference between the standard locks and the cam lock is the number of pins. Inside of these cam locks is single pins in each chamber. The cam lock sidebar is similar to the medeco sidebar except it is pointed rather than a channel. This means the cam pin contains a single hole and the sidebar fits into it in only one direction just like all other medecos. However, it is common for these cam pins to have serations.
        </p>
        <p>
          The best way to pick these is medium tension and looking for those binding pins, like nomal. Lift and spin that binding pin until you feel it "lock" into the sidebar. It will feel solid and unable to be manipulated when it is set to sidebar.
        </p>
        <img src="https://i.imgur.com/PTI0wES.jpeg" alt='cam pin' style={{ width: '70%' }} />
      </div>
    </div>
  );
}