import React from 'react';
import "../../assets/style/pages.css";
import Patent1 from "../../assets/images/patent 1970 blownup.png";
import M3 from "../../assets/images/m3.png";
import M4 from "../../assets/images/m4.png";
import Campin from "../../assets/images/cam lock pin.png";
import Dimple from "../../assets/images/Duracam.png";
import BilevelPatent from "../../assets/images/patent3bilevel.png"
import Durapatent from "../../assets/images/patent3dura.png"
import Patent2 from "../../assets/images/patent2.png";
import Patent3 from "../../assets/images/patent3.png";
import Patent4 from "../../assets/images/patent4.png";
import M3gut from "../../assets/images/m3gut.jpg";
import Bigut from "../../assets/images/biaxgut.jpg";
import Orggut from "../../assets/images/origgut.jpg";

export default function About() {
  return (
    <div className='content'>
      <h2 style={{color: 'white'}}>The Differences in design</h2>
      <div className='cardish'>
        <p>
            <h4> Medeco Original </h4>
        </p>
        <p> 
          The Medeco Original comes with a few different driver pin types: Mushroom style and Standard style.
        </p>
        <p>
        <img src='https://www.lockwiki.com/images/thumb/7/7e/Medeco_Original_cylinder.jpg/240px-Medeco_Original_cylinder.jpg' alt={"Medeco original"} style={{ width: '25%' }} /> <img src={Patent1} alt="patent 1967" style={{ width: '25%'}} />
        </p>
        <p> <img src={Orggut} alt="gutted original" style={{width:'75%'}} /> </p>
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
        <p><img src="https://files.thebuilderssupply.com//imlss/images/all/005308.png" alt='Biaxial design' style={{ width: '25%' }} /> <img src={Patent2} alt="M2 patent" style={{width:'25%'}} />
        </p>
        <p> <img src={Bigut} alt="gutted biaxial" style={{width:'75%'}} /> </p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 3 (m3 for short)</h4>
        </p>
        <p>
          The Medeco 3 featured a redesigned sidebar to include a slider. Mushroom pins, Barrels, and standard pins became the norm with this update. The slider is passive, meaning that you can get the lock to sidebar and sheer and the slider will force the lock into a false set style rotation. Once you push the slider in, you open the lock.
        </p>
        <p> <img src={M3} alt='Medeco 3 mortise' style={{ width: '25%' }} /> <img src={Patent3} alt="M3 patent" style={{width:'25%'}} /> </p>
        <p> <img src={M3gut} alt="gutted M3" style={{width:'75%'}} /> </p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Medeco 4 </h4>
        </p>
        <p> The Medeco 4 incorporated several Assa Abloy improvements, from finer tolerances to side pins similar to other Assa Abloy group manufacturers. The Medeco 4 has Barrels with matching counter-milling, mushrooms, and one or two standard pins. The side pins feature 2 or 3 false gate/variable height true gate pins and one interactive element pin.  
        </p>
        <p> <img src={M4} alt='Medeco 4 mortise' style={{ width: '25%' }} /> <img src={Patent4} alt="M4 patent" style={{width:'25%'}} /> </p>
        <p></p>
      </div>
            <div className='cardish'>
        <p> 
          <h3> Other Medeco Locks </h3>
        </p>
        <p>
          <h4>Bilevel</h4>
        </p>
        <p>
          The Medeco Bilevel (both m3 and m4) contain the standard sidebar features (slider or side pins) and a reverse style sidebar. Unlike the channels for rotation in the medeco locks, these contain a height based cutout that fits level with the sidebar. Any number of the pins (usually between 2 and 4) contain these height based cutouts that react with the sidebar.  
        </p>
        <p> <img src="https://cdn11.bigcommerce.com/s-kyyt8tlqvd/images/stencil/1280x1280/products/25623/453304/Medeco-Original-Standard-6-Pin-Mortise-Cylinder-1-18-1-34-Straight-Cam-00-Keyway_108976__46273.1726368362.jpg?c=1" alt="bilevel cylinders" style={{width:'25%'}} /> <img src={BilevelPatent} alt="bilevel patent" style={{width:'25%'}} /> </p>
        <p> 
          <h4> Medeco Cam Locks</h4>
        </p>
        <p> Much like the bilevel, the cam locks feature the same features of the main Medeco locks with a different sidebar. These have rounded fingers to allow them to slot into the pins of the cam lock. 
        </p>
        <p>
        <img src={Campin} alt={"patent drawing of a cam pin."} style={{ width:'25%' }} />
        <img src="https://cdn11.bigcommerce.com/s-kyyt8tlqvd/images/stencil/1280x1280/products/25584/453193/Medeco-All-In-One-5-Pin-Cam-Lock-Kit-Satin-Chrome_108318__87265.1726368451.jpg?c=1" alt="cam lock" style={{ width:'25%' }} />
        </p>
        <p>
          <h4>Medeco Duracam</h4>
        </p>
        <p>When talking about strange medeco locks, you can't forget the duracam. This was medeco's venture into dimple locks using M3 keys. Using the same style of pins as the Cam lock, the key is inserted horizontal. Odd, but defiantly unique. These come in Biaxial and M3 varieties.
        </p>
        <p> <img src={Dimple} alt={"medeco duracam."} style={{ width:'25%' }} /> <img src={Durapatent} alt="duracam patent" style={{width:'25%'}} /> </p>

        <p>
          <h4> Keymark</h4>
        </p>
        <p> Keymark locks are much more standard than any other medecos. No sidebar here, these pin tips are cone shaped like normal locks. The security here is the outrageous angle of the keyway keeping some low security for less expensive prices.</p>
        <p> <img src="https://www.lockwiki.com/images/thumb/4/4c/Medeco_Keymark_KIK_cylinder.jpg/240px-Medeco_Keymark_KIK_cylinder.jpg" alt="keymark kik" style={{width:'25%'}} /> </p>
        <p>
          <h4>X4</h4>
        </p>
        <p> Keymark/Medeco X4 locks are simple. These are just like keymarks, standard pins without rotations and no sidebar. However, it does have a check pin which prevents core rotation until after it is set. My favorite method is to set a z bar on top of the check pin and pick using BOK on that check pin. See my picking video for an example.</p> 
        <p> <img src="https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1083306" alt="x4 cylinder" style={{width:'50%'}} /> </p>
      </div>
    </div>
  );
}