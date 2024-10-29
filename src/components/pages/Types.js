import React from 'react';
import Millock from '../../assets/images/milpadlocks.png';

export default function Home() {
  return (
    <div className='content'>
      <h1>Types of Medeco Locks</h1>
      <div className='cardish'>
        </div>
        <div className='cardish'>
          <h3> Padlock types</h3>
          <p> I know you all want this first, so here are padlock types that I know of.</p>
          <p>
            Medeco 50 Padlock
          </p>
          <img src='https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1237718' alt="medeco assa abloy 50 padlock" style={{ width: '50%' }} />
          <p> I know that this is a modern lock, but most (if not all) of the medeco 50 padlocks look about the same with varing logos. </p>
        </div>
        <div className='cardish'>
          <p> Medeco protector and medeco 826 padlocks </p>
          <img src='https://i.imgur.com/BZFwF5m.jpeg' alt= "medeco protector padlock" style= {{width: '50%'}} />
          <img src='https://antique-padlocks.com/tn/pt/sg826a_1972_5857_tn.jpg' alt="826 padlock" style= {{width:'50%'}} />
        </div>
        <div className='cardish'>
          <p>
            MEDECO original Cam Padlock
          </p>
          <img src='https://cdn4.volusion.store/fscwp-utjhn/v/vspfiles/photos/STND-MEDC-55-020010-60-2.jpg?v-cache=1563260596' alt="medeco cam padlock" style={{ width:'50%' }} />
          <p> These padlocks don't have a name, to my knowlege. There is two black rubber stoppers and a screw for takedown (inside shackle) on this lock. </p>
        </div>
        <div className='cardish'>
          <p> Medeco Original Padlock</p>
          <img src="https://i.imgur.com/ZIqVEVJ.jpg" alt="medeco original padlock" style={{width:'50%'}} />
          <p> These usually appear just like this. There is no number designation to my knowledge. </p>
        </div>
        <div className='cardish'>
          <p> MEDECO 54 series padlock</p>
          <img src='https://lsidepot.com/images/products/516.jpg' alt="medeco 54 padlock" style={{width:'50%'}} />
          <p> These padlocks persist into the medeco system series during the biaxial generation. I believe these are padlocks made by Masterlock and filled usually with KIK. later, assa abloy began making these with LFIC compatibility. </p>
        </div>
        <div className='cardish'>
          <p> MEDECO Metrolock Padlocks</p>
          <img src='https://i.imgur.com/ZIqVEVJ.jpg' alt=" Metrolock padlock" style={{width:'50%'}} />
          <p> These padlocks contain a biaxial style cam core. These are avaliable in puck style, square bodies, and round bodies. These padlocks were manufactured by American Locks and show their three letter id numbers.</p>
        </div>
        <div className='cardish'>
          <p> HiSheer, 833, and 831 padlocks</p>
          <img src={Millock} alt="military padlocks" style={{width:'50%'}} />
          <p> Seen here, the left is a HiSheer retangular body padlock, 831 and 833 with oval cylindrical bodies. These lock bodies were made by Sargent and Greenleaf and cored with various Biaxial, original, or restricted keyway Medecos. The original contract was proposed in the late 1960's and production began in the early 1970's. Please see the medeco 1 thru 4 page for a better breakdown. </p>
        </div>
    </div>
  );
}