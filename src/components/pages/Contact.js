import React from 'react';
import "../../assets/style/pages.css";
import Patent1 from "../../assets/images/patent 1970 blownup.png";
import M3 from "../../assets/images/m3.png";
import M4 from "../../assets/images/m4.png";
import Campin from "../../assets/images/cam lock pin.png";
import Dimple from "../../assets/images/Duracam.png";

export default function About() {
  return (
    <div className='content'>
      <h2>The Differences in designs</h2>
      <div className='cardish'>
        <p>
            <h4> Medeco Classic </h4>
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
        <img src="https://files.thebuilderssupply.com//imlss/images/all/005308.png" alt='Biaxial design' style={{ width: '50%' }} />
        <p></p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 3 (m3 for short)</h4>
        </p>
        <p>
          The Medeco 3 featured a redesigned sidebar to include a slider. Mushroom pins, Barrels, and standard pins became the norm with this update. The slider is passive, meaning that you can get the lock to sidebar and sheer and the slider will force the lock into a false set style rotation. Once you push the slider in, you open the lock.
        </p>
        <p> <img src={M3} alt='Medeco 4 mortise' style={{ width: '50%' }} /> </p>
        <p></p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 4 </h4>
        </p>
        <p> The Medeco 4 incorporated several assa/abloy improvments, from finer tolerances to side pins similar to other assa abloy group manufacturers. The Medeco 4 has Barrels with matching coutermilling, mushrooms, and one or two standard pins. The side pins feature 2 or 3 false gate/variable height true gate pins and one interactive element pin.  
        </p>
        <p> <img src={M4} alt='Medeco 4 mortise' style={{ width: '50%' }} /> </p>
        <p></p>
      </div>
      <div className='cardish'>
        <h3> Military Padlocks</h3>
        <p> Medeco in the early 70's partnered with Sargent and Greenleaf to make several high security padlocks for use in Military applications. This list has several but does not contain all of the variants.
        </p>
        <p> S&G 826 (a thru D): Short oval shaped, medeco classic or biaxial core (based on year made)</p>
        <p> <img src="https://i.ebayimg.com/images/g/4EoAAOSwg7RmbH6X/s-l1200.jpg" alt="826 c lock" style={{ width: '40%' }} /> </p>
        <p> S&G 831 (A and B): Taller protected shackle, mostly biaxial cores.Ingersoll is stamped on many of these.</p>
        <p> <img src="https://thumbs.worthpoint.com/zoom/images1/1/0411/29/sargent-greenleaf-g-831-high-security_1_6d749e5e71b07f512903f4330cbb11eb.jpg" alt="831 lock" style={{ width:'50%' }} /> </p>
        <p> S&G 833 (a and C): Taller and two sectioned version of the 831. More sleak and closer to the modern version. This one separates into two sections. </p>
        <p> <img src="https://securitysnobs.com/item_images/9078061827014dff4cf0ecad893045e4_2.jpg" alt="833 padlock" style={{width:'50%'}} /> </p>
        <p> S&G 951: Believed to be the latest padlock made for the military by Medeco/S&G. Two part, newest version I've seen is 2014.</p>
        <p> <img src="https://www.safelocking.co.uk/images/new_products/padlocks/951_951C_High_Security_Padlock.png" alt="951 padlock" style={{width: '50%'}} /> </p>
      </div>
      <div className='cardish'>
        <p> 
          <h3> Other Medeco Locks </h3>
        </p>
        <p>
          <h4>Bilevel</h4>
        </p>
        <p>
          The Medeco Bilevel (both m3 and m4) contain the standard sidebar featuers (slider or side pins) and a reverse style sidebar. Unlike the channels for rotation in the medeco locks, these contain a height based cutout that fits level with the side bar. Any number of the pins (usually between 2 and 4) contain these height based cutouts that react with the side bar.  
        </p>
        <p> <img src="https://cdn11.bigcommerce.com/s-kyyt8tlqvd/images/stencil/1280x1280/products/25623/453304/Medeco-Original-Standard-6-Pin-Mortise-Cylinder-1-18-1-34-Straight-Cam-00-Keyway_108976__46273.1726368362.jpg?c=1" alt="bilevel cylinders" style={{width:'50%'}} /> </p>
        <p> 
          <h4> Medeco Cam Locks</h4>
        </p>
        <p> Much like the bilevel, the cam locks feature the same features of the main Medeco locks with a different sidebar. These have rounded fingers to allow to slot into the pins of the cam lock. 
        </p>
        <p>
        <img src={Campin} alt={"patent drawing of a cam pin."} style={{ width:'50%' }} /> </p> 
        <p>
        <img src="https://cdn11.bigcommerce.com/s-kyyt8tlqvd/images/stencil/1280x1280/products/25584/453193/Medeco-All-In-One-5-Pin-Cam-Lock-Kit-Satin-Chrome_108318__87265.1726368451.jpg?c=1" alt="cam lock" style={{ width:'50%' }} />
        </p>
        <p>
          <h4>Medeco Duracam</h4>
        </p>
        <p>When talking about strange medeco locks, you can't forget the duracam. This was medeco's venture into dimple locks using M3 keys. Using the same style of pins as the Cam lock, the key is inserted horizontal. Odd, but definately unique.
        </p>
        <p> <img src={Dimple} alt={"medeco duracam."} style={{ width:'50%' }} /> </p>

        <p>
          <h4> Keymark</h4>
        </p>
        <p> <img src="https://www.lockwiki.com/images/thumb/4/4c/Medeco_Keymark_KIK_cylinder.jpg/240px-Medeco_Keymark_KIK_cylinder.jpg" alt="keymark kik" style={{width:'50%'}} /> </p>
        <p>
          <h4>X4</h4>
        </p>
        <p> <img src="https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1083306" alt="x4 cylinder" style={{width:'50%'}} /> </p>
      </div>
    </div>
  );
}