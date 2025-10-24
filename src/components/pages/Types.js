import React from 'react';
import Millock from '../../assets/images/milpadlocks.png';
import Metrolock from '../../assets/images/IMG_1034.jpg';
import SG951 from '../../assets/images/9512024.jpg';
import Hisheer1 from '../../assets/images/hisheer1.jpg';
import Hisheer2 from '../../assets/images/hisheer2.jpg';
import Hisheer3 from '../../assets/images/hisheer3.jpg';
import System from '../../assets/images/54series.webp';

export default function Home() {
  return (
    <div className='content'>
      <h1 style={{color:'#FFFAFA'}}>Types of Medeco Padlocks</h1>
      <div className='cardish'>
        </div>
        <div className='cardish'>
          <h3>
            Medeco 50 Padlock
          </h3>
          <img src='https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1237718' alt="medeco Assa Abloy 50 padlock" style={{ width: '25%' }} />
          <img src='https://preview.redd.it/medeco-padlock-identification-v0-uumy8hy1j4jd1.jpg?width=1080&crop=smart&auto=webp&s=6368903b4ee1b7c3a9243fc1cfb6f60372230b1c' alt="medeco 50 padlock" style={{ width: '25%' }} />
          <p> I know that this is a modern lock, but most (if not all) of the Medeco 50 padlocks look about the same with varying logos. </p>
        
          <h3> Medeco protector</h3>
          <img src='https://i.imgur.com/BZFwF5m.jpeg' alt= "medeco protector padlock" style= {{width: '25%'}} />
        
          <h3>
            MEDECO original Cam Padlock
          </h3>
          <img src='https://cdn4.volusion.store/fscwp-utjhn/v/vspfiles/photos/STND-MEDC-55-020010-60-2.jpg?v-cache=1563260596' alt="medeco cam padlock" style={{ width:'25%' }} />
          <p> These padlocks don't have a name, to my knowledge. There are two black rubber stoppers and a screw for takedown (inside shackle) on this lock. </p>
        
          <h3> Medeco Original Padlock</h3>
          <img src="https://i.imgur.com/ZIqVEVJ.jpg" alt="medeco original padlock" style={{width:'25%'}} />
          <p> These usually appear just like this. There is no number designation to my knowledge. </p>
        
          <h3> MEDECO 54 series padlock </h3>
          <img src={System} alt="medeco 54 padlocks" style={{width:'25%'}} />
          <p> These padlocks persist into the Medeco system series during the biaxial generation. I believe these are padlocks made by Masterlock and filled usually with KIK. later, Assa Abloy began making these with LFIC compatibility. </p>
        
          <h3> MEDECO Metrolock Padlocks</h3>
          <img src={Metrolock} alt=" Metrolock padlock" style={{width:'25%'}} />
          <p> These padlocks contain a biaxial style cam core. These are available in puck style, square bodies, and round bodies. These padlocks were manufactured by American Locks and show their three letter id numbers.</p>
        
        <h3> Military Padlocks</h3>
        <img src={Millock} alt= "military padlocks" style={{width:'25%'}} />
        <p> Medeco in the early 70's partnered with Sargent and Greenleaf to make several high security padlocks for use in Military applications. This list has several but does not contain all of the variants.
        </p>
        <p> Hisheer: Rectangular body, Medeco core </p>
        <p> From what I could find, these locks are used in miltary applications requiring vertical clearance. I would imagine these were not used on boxes but rather on areas with less space than the 826 or 831 could need. </p>
        <p> <img src={Hisheer1} alt ="Hi sheer front" style={{width: '25%'}} /> <img src={Hisheer2} alt="hi sheer top" style={{width: '25%'}} /> <img src={Hisheer3} alt="high sheer core" style={{width: '50%'}} /> </p> <p> Images provided by el_pidgeonne </p>
        <p> S&G 826 (a thru D): Short oval shaped, Medeco classic or biaxial core (based on year made)</p>
        <p> <img src="https://i.ebayimg.com/images/g/4EoAAOSwg7RmbH6X/s-l1200.jpg" alt="826 c lock" style={{ width: '40%' }} /> </p>
        <p> S&G 831 (A and B): Taller protected shackle, mostly biaxial cores. Ingersoll is stamped on many of these.</p>
        <p> <img src="https://lh6.googleusercontent.com/proxy/cMV_EmedbKtpU3DAk7Wek_6hEZatPHtZZFoIyb8BfJvvYIQaez_mvXQYneHaN42krn9LAIJOyBWJn3AgVKGr-rwhWxW-yHqzyVlZMdtpC2Y" alt="831 lock" style={{ width:'25%' }} /> </p>
        <p> S&G 833 (a and C): Taller and two sectioned version of the 831. More sleek and closer to the modern version. This one separates into two sections. </p>
        <p> <img src="https://securitysnobs.com/item_images/9078061827014dff4cf0ecad893045e4_2.jpg" alt="833 padlock" style={{width:'25%'}} /> </p>
        <p> S&G 951: Believed to be the latest padlock made for the military by Medeco and S&G. Two part, newest version I've seen is 2024.</p>
        <p> <img src="https://www.safelocking.co.uk/images/new_products/padlocks/951_951C_High_Security_Padlock.png" alt="951 padlock" style={{width: '50%'}} /> </p>
        <p> <img src={SG951} alt="951 padlock" style={{width: '50%'}} /> </p>
      </div>
      <div className="cardish" >
        <h3> Sargent and Greenleaf Mil lock Documents</h3>
        <p> These are PDfs on safe sites.</p>
        <p> <a href="https://ftp.sargentandgreenleaf.com/pdf/630-116_826_padlock.pdf"> 826 manual</a> </p>
        <p> <a href="https://exwc.navfac.navy.mil/Portals/88/Documents/EXWC/DoD_Locks/PDFs/TDS-2043-SHR.pdf"> Technical data sheet for the 833C</a> </p>
        <p> <a href="https://sargentandgreenleaf.com/wp-content/uploads/2020/06/Servicing_951.pdf"> Servicing manual for the 951</a> </p>
        </div>
    </div>
  );
}
