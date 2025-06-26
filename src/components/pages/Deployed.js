import React from 'react';
import "../../assets/style/pages.css";
import Gates from '../../assets/images/original pin parts.png';
import Core from '../../assets/images/originalcore.png';
import Sir from '../../assets/images/skeypin.png';

export default function About() {
  return (
    <div className='content'>
      <h2 style={{color:'white'}}>Picking Theory</h2>
      <div className='cardish'>
        <h3> Writeup on medeco security features</h3>
        <p> Medeco has many different security features that you will encounter. First is the sheer line. This is affected by the pin heights and sizes but also on the generation. As you move away from classic and biaxial locks, the tolerances become much tighter. This results in later generations or the Assa Abloy stamped locks being more difficult to pick. You will notice that many locks with higher tolerances are in higher lpu belt ratings as it is much harder to manipulate.</p>
        <p>The sidebar comes in two primary flavors for non-bilevel locks. First is the triangle-esque wedge design. This is on most m series medecos. The keypins have a true gate with a length that matches with the sidebar. When the sidebar wedge meets the key pin true gate the sidebar will retract into the lock allowing rotation. The directions are in 20 degree sets, left/center/right being 20 degrees from each other. The key pins feature this true gate that fits the sidebar. There are also serrations and false gates that can prevent you from setting the sidebar as well. The false gates are easy, in my opinion, to move into and out of with little resistance. The serrations are deep and can mess up the sheer line setting, mostly. You can set the sidebar to a serration by accident on worn down medeco locks.</p>
        <p>In addition to these features, MEDECO has introduced a few others. The MEDECO3 or M3 series has a slider Mechanical piece that will prevent you from setting the sidebar. If you are picking clockwise, it will be the last thing you set after reaching the deep false set. If you are picking counter clockwise, it will set when the rotations are set to the sidebar. It provides little added security in my opinion as opposed to the next security feature.</p>
        <p>The MEDECO4 or M4 series introduced side pins that prevent the sidebar from retracting. The M4 typically features 3 or 4 of these side pins. One will always be an interactive element denoted on the key with a small steel "ball" or cylinder. This side pin has no false gate. The other pins are set at one of four heights and contain one or more false gates.  More information will follow with photographs once I collect more information.</p>
        <p>The X4 or MEDECO Keymark X4 contains a check pin. This pin will restrict rotation if it is not set. The one unique aspect about this check pin is that it can be overset. The simplest way I have found to set it correctly is taking a short end of a Z bar style tensioner and using it to hold the pin in place while also using bottom of the keyway tension off of it. Make sure your Z bar isn't too long by viewing the check pin through the port on the top of the kik or mortise. Sorry for those picking them inside padlocks and lfic/sfic bodies.</p>
      </div>
      <div className='cardish'>
        <h3> the pins </h3>
        <img src={Gates} alt='illustration of gates on a original pin' style={{width:'50%'}} />
        <p> Looking at the pin above, look at the white circle. This is the rotation limiter allowing only 40 total degress of rotation, or 20 degrees from center. </p>
        <p> Next, look at the red and green lines. You will notice the green line is a deep cut into the pin. This is the true gate. It is cut deep and aligns with the sidebar to allow the sidebar to retract fully. </p>
        <p> The Red line is a shallow cut that allows the sidebar to enter it, however it doesn't allow for full rotation. This can trip you up when picking the Medeco. </p>
        <img src={Sir} alt="serrated key pin" style={{width:'50%'}} />
        <p> Do be aware that Medeco locks do have serrated key pins. These can prevent you from setting the sheer and prevent rotation. </p>
      </div>
      <div className='cardish'>
        <h3> The core</h3>
        <img src={Core} alt='original lock core' style={{width:'50%'}} />
        <p> This is the core of the biaxial and original core. This one specifically is the original Medeco core. See how the sidebar has wedge like parts that point out? These sit into the true gates show above. These grooves allow the sidebar to retract into the core and the core can rotate freely. </p>
      </div>
      <div className='cardish'>
        <p> 
            <h3>How to pick standard medecos, KIK and cylinder style. </h3>
            </p>
            <p> My favorite way to manipulate the pins has to do with the angles of the design. The original has V shaped key pins which are centered, meaning you can put a little pressure on either forward or aft of the pin and get rotations. The biaxial pins are offset, meaning that any lock from Biaxial to M4 will have pins facing you or away from you. I prefer to handle Biaxial key pins by pushing/pulling on either corner (left or right corner) as this rotates the pins easily. You can also pull with the lift using this method leading to even more rotation in corroded or damaged keyways.

            </p>
            <p> Picking medecos are not as complicated as some may lead you to believe. It all comes down to moving the pins in two ways, forwards/backwards and up/down. Any normal lock will be picked by setting the key pins at the sheer line (also known as picking to sheer). As you become more familiar with security pins, you will need to learn more techniques such as setting spools and barrels.</p>
            <p> Medecos add to this a new piece of the puzzle, the sidebar. The only way for that sidebar to be allowed to move is to have the key pins set to the true gates. This allows the sidebar to retract into the core of the lock and rotation to happen. So, let's talk a bit on how this happens.</p>
            <p> For a great resource, see Lockfall Labs video on the resource tab.</p>
            </div>
            <div className='cardish'>
              <p>The best way to set the key pins to the sidebar is to rotate the pin. This can be achieved rather simply by lifting the pin while pulling at a corner of the pin. You can also push and pull them without lifting for some rotation as well, but it is harder to control. Thankfully, medecos come with a rotational limiter.</p>
              <p>In case you didn't know, the rotation of a medeco key pin is locked to 20 degrees (unlike emhart pins which have free rotation). You can rotate the pins to the 20 degrees set by the key pin rather simply by pulling/pushing on corners with max force and it will always stop at the max of 20 degrees. They will also never be unable to be set by the key, unlike some other spinny pin locks.</p>
              <p>Lifting and rotating is also another option. While you lift the pin, pull or push on the corners to rotate the pin and hopefully set it. For those 0 degree pins, this can also be achieved with lift/rotation by pushing or pulling in the center of the pin during lifting. I find that this is the simplest way to achieve rotation.</p>
              <p> But wait! I got a false set! What should I do? Don't fret, it's easy to fix the mistake. False sets usually only happen if a M3 security slider pin hasn't been pushed in, or you are picking clockwise and one of your key pins is in a false gate. Simply put max tension on the core and look for a pin that doesn't bounce. To fix, push or pull that stiff pin to put it into the true gate. Even using medium tension and pushing it to sheer works in most cases. </p>
              <p>
              <img src="https://reedbrotherssecurity.com/images/locks_high_security/medeco_m3_biaxial/medeco_biaxial_pins.jpg" alt='biaxial pins' style={{ width: '60%' }}/>
              </p>
      </div>
      <div className='cardish'>
        <p>
          <h2> Progressive Picking is a must!</h2>
        </p>
        <p>
          Now that you are into high security lock picking, you will have to learn to progressive pick. This involves removing whole pin stacks from the lock giving you a simple challenge without the full weight of the lock causing issues. I recommend starting with pins 3 and 4 only in the lock. Rotate them back and forth, lift to sheer, set them perfectly and test them out. By doing this, you understand how the whole lock will react as you pick it. Add one stack at a time, opening it over and over again to gain comfort and confidence in picking Medecos!
        </p>
        <p> The Other fun thing you can do is place only key pins in the lock with the sidebar. This allows you to learn the true gates of a medeco without having to worry about the sheer line. You can still overset pins, so focus on rotating pins with this setup. </p>
        <p> The other thing you will need to learn is the clicky test. See the resource tab for a video on the clicky test.</p>
      </div>
      <div className='cardish'>
        <p>
          <h3> Medeco Cam lock Picking theory</h3>
        </p>
        <p>
          First difference between the standard locks and the cam lock is the number of pins. Inside of these cam locks are single pins in each chamber. The cam lock sidebar is similar to the medeco sidebar except it is pointed rather than a channel. This means the cam pin contains a single hole and the sidebar fits into it in only one direction just like all other medecos. However, it is common for these cam pins to have serrations.
        </p>
        <p>
          The best way to pick these is medium tension and looking for those binding pins, like normal. Lift and spin that binding pin until you feel it "lock" into the sidebar. It will feel solid and unable to be manipulated when it is set to the sidebar.
        </p>
        <img src="https://i.imgur.com/PTI0wES.jpeg" alt='cam pin' style={{ width: '70%' }} />
      </div>
    </div>
  );
}