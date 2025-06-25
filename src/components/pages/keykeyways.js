import React from 'react';
import "../../assets/style/pages.css";
import keyways from "../../assets/images/keyways.png";
import G3 from "../../assets/images/g3key.png";
import K1515 from "../../assets/images/1515key.png";
import K1644 from "../../assets/images/1644key.png";
import Fireking from "../../assets/images/firekingkey.png";
import Sky from "../../assets/images/skykey.png";

export default function Keyways() {
  return (
    <div className='content'>
        <h2 style={{color:'#FFFAFA'}}>Keyways and Key Identifications</h2>
        <div className='cardish'>
            <h3> Common keyways and their ilco blanks</h3>
            <p> Small note: each keyway has a ilco 4 digit code. The letter 'A' denotes 6 pin where as the four digit number denotes 5 pin.</p>
            <a src={keyways} alt='keway diagrams' style={{ width: '70%' }}/>
            <p> These are your most common keyways and their ilco blanks. Lets break it down</p>
            <p>ilco 1517 is the blank for the sky keyway. This has a bell shaped top and says "restricted" on the key.</p>
            <p> Ilco 1515 or 5ME1 is your standard key for original keys. These almost always have round heads on them.</p>
            <p> The most common biaxial keyway is the G3 keyway. These were sold as the freedom keyway and are most known for a eagle stamp on the key.</p>
            <p> Ilco 1644 or G8 is biaxial key.</p>
            <p> ilco 1687 will have more information coming soon.</p>
            <p> ilco 1518 will have more information coming soon.</p>
            <p> ilco 1655 is the fire king cabnet keys. These are primarly sold as cabnet, file cabnet, or desk drawers.</p>
        </div>
        <div className='cardish'>
            <h3> Common keys</h3>
            <p> Small note: There are over 50 original keways and over 40 biaxial keyways. </p>
            <a src={G3} alt='g3 key blank' style={{ width:'50%'}} />
            <p> This is a g3 key blank. You will see them as Biaxial keys with a eagle.</p>
            <a src={K1515} alt="medeco original key" style={{ width:'50%'}} />
            <p> This is a medeco original key, ilco number 1515. This is the most common Original key.</p>
            <a src={K1644} alt="g8 key" style={{ width:'50%'}} />
            <p> this is the g8 blank. </p>
            <a src={Fireking} alt="fire king key" style={{ width: "50%"}} />
            <p> This is a fireking cabnet key. Ilco 1655.</p>
            <a src={Sky} alt="Sky key" style={{ width:"50%"}} />
            <p> This is the sky key or ilco 1517.</p>
            <p> more to be added soon</p>
        </div>
        <div className='cardish'>
            <h3> Links to buy blanks.</h3>
            <a href='https://www.clksupplies.com/collections/medeco-key-blanks?srsltid=AfmBOor8ox51aX6eZGaji8qOngJcvoVtyAjbm8UGHDM4wuiKtH01SMhM'>Link to CLK supplies medeco blanks.</a>
            <a href='https://ekeyblanks.com/key-blanks/residential-and-commercial-keys/medeco-keys/'> Link to Ekeyblanks. Contains other less common keyways.</a>
        </div>
    </div>
    );
}
