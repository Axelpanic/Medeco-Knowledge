import React from 'react';
import "../../assets/style/pages.css";
import Patent1 from "../../assets/images/patent 1970 blownup.png";
import Biaxial from "../../assets/images/patent2.png";
import M3 from "../../assets/images/m3.png";
import M4 from "../../assets/images/m4.png";
import Campin from "../../assets/images/cam lock pin.png";
import Campin2 from "../../assets/images/camlock pins.png";
import Dimple from "../../assets/images/Duracam.png";

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
        <img src={Patent1} alt={"patent of medeco classic"} style={{ width: '50%' }} />
        </p>
        <p> 
          The 'V' shaped pins make for easy spinning and manipulation as opposed to later versions.
        </p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco Biaxial</h4>
        </p>
        <p>
          The Medeco Biaxial mainly contains mushroom and standard driver pins. However, in the late 80's and 90's barrels were added to increase picking difficulty. False gates became common as well. 
        </p>
        <img src={Biaxial} alt='Biaxial pin design' style={{ width: '50%' }} />
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 3 (m3 for short)</h4>
        </p>
        <p>
          The Medeco 3 featured a redesigned sidebar to include a slider. Mushroom pins, Barrels, and standard pins became the norm with this update. The slider is passive, meaning that you can get the lock to sidebar and sheer and the slider will force the lock into a false set style rotation. Once you push the slider in, you open the lock.
        </p>
        <p> <img src={M3} alt='Medeco 4 mortise' style={{ width: '50%' }} /> </p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 4</h4>
        </p>
        <p> The Medeco 4 incorporated several assa/abloy improvments, from finer tolerances to side pins similar to other assa abloy group manufacturers. The Medeco 4 has Barrels with matching coutermilling, mushrooms, and one or two standard pins. The side pins feature 2 or 3 false gate/variable height true gate pins and one interactive element pin.  
        </p>
        <p> <img src={M4} alt='Medeco 4 mortise' style={{ width: '50%' }} /> </p>
      </div>
      <div className='cardish'>
        <p> 
          <h3> Other Medeco Locks</h3>
        </p>
        <p>
          <h4>Bilevel</h4>
        </p>
        <p>
          The Medeco Bilevel (both m3 and m4) contain the standard sidebar featuers (slider or side pins) and a reverse style sidebar. Unlike the channels for rotation in the medeco locks, these contain a height based cutout that fits level with the side bar. Any number of the pins (usually between 2 and 4) contain these height based cutouts that react with the side bar.  
        </p>
        <p> 
          <h4> Medeco Cam Locks</h4>
        </p>
        <p> Much like the bilevel, the cam locks feature the same features of the main Medeco locks with a different sidebar. These have rounded fingers to allow to slot into the pins of the cam lock. 
        </p>
        <p>
        <img src={Campin} alt={"patent drawing of a cam pin."} style={{ width:'50%' }} />
        <img src={Campin2} alt={"cam lock pinning"} style={{ width:'50%' }} />
        </p>
        <p>
          <h4>Medeco Duracam</h4>
        </p>
        <p>When talking about strange medeco locks, you can't forget the duracam. This was medeco's venture into dimple locks using M3 keys. Using the same style of pins as the Cam lock, the key is inserted horizontal. Odd, but definately unique.
        </p>
        <p> <img src={Dimple} alt={"medeco duracam."} style={{ width:'50%' }} /> </p>
      </div>
    </div>
  );
}