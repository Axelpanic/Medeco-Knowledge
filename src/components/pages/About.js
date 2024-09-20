import React from 'react';
import "../../assets/style/pages.css";
import Patentone from "../../assets/images/patent 1970 blownup.png";
import Patenttwo from '../../assets/images/patent2.png';
import Sold from "../../assets/images/hillenbrand sells.png";
import Medeco3 from "../../assets/images/medeco history 3.png";
import OliverR from "../../assets/images/roy oliver.jpg";

export default function About() {
  return (
    <div className='content'>
      <h2>About The Company, Medeco</h2>
      <div className='cardish'>
        <p>
          In the 1950s, Roy Clifton Spain started his own business with Roy Oliver (pictured below) in his basement in Roanoke, Virginia. He had previously worked for Yale (yes, that Yale). He brought on two others, Fred Wagner and Elvis Flora.
        </p>
        <p>
          <img src={OliverR} alt="Roy Oliver pictured at MEDECO in Virginia" style={{ width: '100%' }} />
        </p>
        <p>
          They started the Mechanical Development Company, or MEDECO. In 1957, they had their first prototype of the key but decided not to move forward. However, on March 1st, 1967, Roy Spain submitted a patent application, listing himself and his three coworkers as the designers.
        </p>
        <p>
          <img src={Patentone} alt="Patent from March 1st, 1967" style={{ width: '100%' }} />
        </p>
        <p>
          Although none of them wanted to be locksmiths or lock designers, they made a lock that was highly resistant to picking, which was something New York City needed at the time. In the early 70s, Medeco offered a $10,000 cash prize to anyone who could pick their new lock. In 1972, one NYC police detective was able to open a lock but couldn't replicate the feat. He won $1,500.
        </p>
        <p>
          This contest brought MEDECO into the spotlight, and the company began to sell very well, particularly in NYC.
        </p>
        <p>
          In 1972, Roy C. Spain sold his rights to the patent to Roy Oliver, who became the head of MEDECO. In 1983, Hillenbrand Industries bought MEDECO, expanding it and introducing the MEDECO Biaxial around the world.
        </p>
        <p>
          <img src={Patenttwo} alt="Biaxial pin patent" style={{ width: '100%' }} />
        </p>
        <p>
          In the mid-1990s, MEDECO continued to invest in research and development, led by Mr. Fields, to remain at the forefront of lock manufacturing. In 1996, MEDECO shifted to selling directly to retail locksmiths, saving them money.
        </p>
        <p>
          <img src={Sold} alt="NYT article about the sale to ASSA ABLOY Group" style={{ width: '100%' }} />
        </p>
        <p>
          In 1998, MEDECO was sold again, this time to the ASSA ABLOY Group. This partnership provided access to more resources and patents. Leveraging ASSA ABLOY's innovations, MEDECO developed the M3 in 2005 and the M4 in 2017. Both models are UL patented to ensure security against duplicate keys.
        </p>
        <h5>Here is an excerpt from the Assa Abloy Group webpage about MEDECO's history:</h5>
        <p>
          <img src={Medeco3} alt="Official history of MEDECO from ASSA ABLOY" style={{ width: '100%' }} />
        </p>
      </div>
    </div>
  );
}
