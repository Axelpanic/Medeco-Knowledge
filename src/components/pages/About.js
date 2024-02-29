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
      <h2>About The Company Medeco</h2>
      <div className='cardish'>
        <p> 
          Roy C. Spain had a idea. In 1955 he stared his own buislness in his own basement in Roanoke, Virigina. He previously worked for Yale (yes, that yale). He brought on three other folks, Fred Wagner, Elvis Flora, and Roy Oliver (pictured below). 
</p>
<p> <img src={OliverR} alt='Roy Oliver pictured at MEDECO in Virginia' style={{width:'100%'}}/> </p>
<p>
          They started the Mechanical Development Company, or MEDECO. In 1957, they had their first prototype of the key and decided not to push forward. But on March 1st 1967, Roy Spain submitted a application to the Patent office using his and his three coworkers as the designers.
</p>
<p>
          <img src={Patentone} alt="patent from March 1st, 1967" style={{width:'100%'}} />
</p><p>
          None of them wanted to be locksmiths or lock designers, but they made a lock that was very resistant to picking which was something NYC needed at the time. In the early 70's, Medeco put out a contest for $10,000 cash to anyone who could pick open their new lock. In 1972, one NYC police detective was able to open one lock but was not able to do it again. He won $1,500.
</p><p>
          This contest brought MEDECO into the spotlight. They sold very well for a while, especially in NYC.
</p><p>
          In 1972, Roy C Spain sold his rights to the patent to Roy Oliver and Oliver became the head of MEDECO. In 1983, Hillenbrand Industries bought MEDECO. They expanded MEDECO and introducted the MEDECO Biaxial around the world!
          </p>
          <p>
            <img src={Patenttwo} alt="biaxial pin patent" style={{width:'100%'}} />
            </p><p>          
          In the mid 1990's, MEDECO kept up R&D lead by Mr. Fields to be on the leading edge of lock manufacturing. In 1996 MEDECO changed and sold directly to retail locksmiths, saving locksmiths money!
          </p>
          <p><img src={Sold} alt=" NYT article sold to assa abloy group" style={{width:'100%'}} /></p>
          <p>
          In 1998, MEDECO was sold again. This time, they were sold to ASSA ABLOY Group. They now had partners around the world and more tools than they knew what to do with. Using ASSA ABLOY group's patents, they created the M3 soon after in 2005 and the M4 in 2017! Both are UL patented to gurantee security against duplicate keys.
        </p>

        <p>
          <h5>Here is a exerpt from the Assa Abloy Group webpage about MEDECO's history</h5>
          <img src={Medeco3} alt="assa abloy official history of MEDECO" style={{width:'100%'}}/>
        </p>
      </div>
    </div>
  );
}