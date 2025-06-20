import React from 'react';
import "../../assets/style/pages.css";

export default function About() {
  return (
    <div className='content'>
      <h2 style={{color:'white'}}>Picking Theory</h2>
      <div className='cardish'>
        <p> 
            <h3>How to pick standard medecos, KIK and cylinder style. </h3>
            </p>
            <p> My favorite way to manipulate the pins has to do with the angles of the design. The original has V shaped key pins which are centered, meaning you can put a little pressure on either forward or aft of the pin and get rotations. The biaxial are offset, meaning that any lock from Biaxial to M4 will have pins facing you or away from you. I prefer to handle Bixaial keypins by pushing/pulling on either corner (left or right corner) as this rotates the pins easily. You can also pull with the lift using this method leading to even more rotation in corroded or damaged keyways.

            </p>
            <p> Picking medecos are not as complicated as some may lead you to believe. It all comes down to moving the pins in two ways, fowards/backwards and up/down. Any normal lock will be picked by setting the keypins at the sheer line (also known as picking to sheer). As you become more familiar with security pins, you will need to learn more techniques such as setting spools and barrels.</p>
            <p> Medecos add to this a new piece of the puzzel, the side bar. The only way for that sidebar to be allowed to move is to have the keypins set to the true gates. This allows the sidebar to retract into the core of the lock and rotation to happen. So, lets talk a bit on how this happens.</p>
            <p> For a great resource, see Lockfall Labs video on the resource tab.</p>
            </div>
            <div className='cardish'>
              <p>The best way to set the keypins to the sidebar is to rotate the pin. This can be achieved rather simply by lifting the pin while pulling at a corner of the pin. You can also push and pull them without lifting for some rotation as well, but it is harder to control. Thankfully, medecos come with a rotational limiter.</p>
              <p>In case you didn't know, the rotation of a medeco keypin is locked to 20 degrees (unlike emhart pins which have free rotation). You can rotate the pins to the 20 degrees set by the key pin rather simply by pulling/pushing on corners with max force and it will always stop at the max of 20 degrees. They will also never be unable to be set by the key, unlike some other spinny pin locks.</p>
              <p>Lifting and rotating is also another option. While you lift the pin, pull or push on the corners to rotate the pin and hopefully set it. for those 0 degree pins, this can also be achieved with lift/rotation by pushing or pulling in the center of the pin during lifting. I find that this is the simplist way to achieve rotating.</p>
              <p> But wait! I got a false set! What do I do? Don't fret, it's easy to fix the mistake. False sets usually only will happen if a M3 security slider pin hasn't been pushed in, or you are picking clockwise and one of your key pins is in a false gate. Simply put max tension on the core and look for a pin that doesn't bounce. To fix, push or pull that stiff pin to put it into the true gate. Even using medium tension and pushing it to sheer works in most cases. </p>
              <p>
              <img src="https://reedbrotherssecurity.com/images/locks_high_security/medeco_m3_biaxial/medeco_biaxial_pins.jpg" alt='biaxial pins' style={{ width: '60%' }}/>
              </p>
      </div>
      <div className='cardish'>
        <p>
          <h2> Progressive Picking is a must!</h2>
        </p>
        <p>
          Now that you are into high security lock picking, you will have to learn to progressive pick. This involves removing whole pin stacks from the lock giving you a simple challenge without the full weight of the lock causing issues. I recommend starting with pins 3 and 4 only in the lock. Rotate them back and forth, lift to sheer, set them perfectly and test them out. By doing this, you understand how the whole lock will react as you pick it. Add one stack at a time, opening it over and over again to gain comfort and confedence in picking Medecos!
        </p>
        <p> the Other fun thing you can do is place only keypins in the lock with the sidebar. This allows you to learn the true gates of a medeco without having to worry about the sheer line. You can still overset pins, so focus on rotating pins with this setup. </p>
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