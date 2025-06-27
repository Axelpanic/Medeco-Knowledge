import React from 'react';
import "../../assets/style/pages.css";
import Patentone from "../../assets/images/patent 1970 blownup.png";
import Patenttwo from '../../assets/images/patent2.png';
import Sold from "../../assets/images/hillenbrand sells.png";
import Medeco3 from "../../assets/images/medeco history 3.png";
import OliverR from "../../assets/images/roy oliver.jpg";
import Patent3 from "../../assets/images/patent3.png";
import Patent4 from "../../assets/images/patent4.png";

export default function About() {
  return (
    <div className='content'>
      <h2 style={{color:'#FFFAFA'}}>About The Company, Medeco</h2>
      <div className='cardish'>
        <p>
          <h4> Sources:</h4>
        </p>
        <p> <a href="https://roanoke.com/medeco-marks-golden-anniversary-as-roanoke-county-plant-turns-50/article_baa94a53-59ee-5563-ac6c-32fb6ce176fe.html#:~:text=The%20company%27s%20roots%20begin%20in,pick%20open%20three%20Medeco%20locks" target="blank"> Rokanoke article: Medeco Golden anniversary</a>.
        </p>
        <p> <a href="https://www.lockwiki.com/index.php/Medeco" target="blank">Lockwiki: Medeco </a>
        </p>
        <p> <a href="https://www.prweb.com/releases/Medeco_Security_Locks_Celebrates_50_Years_of_High_Security/prweb15764393.html" target="blank"> PRweb: 50 Years of High Security</a>
        </p>
      </div>
      <div className='cardish'>
        <h3> Mecanical Development Company</h3>
        <p><img src="https://www.medeco.com/content/dam/assa-abloy/americas/aeh/medeco-authored/site-imagery/about-us/medeco-history.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt='roy c spain in his basement' style={{width: '50%'}} /> </p>
        <p>
          In the 1950s, Roy Clifton Spain (pictured above) started his own business with Paul Powel in his basement in Roanoke, Virginia. They started the Mechanical Development Company with the intention of tool and die manufacturing.
        </p>
        <p>
          <img src={OliverR} alt="Roy Oliver pictured at MEDECO in Virginia" style={{ width: '70%' }} />
        </p>
        <p>
          In 1957, they had their first prototype of a pick proof key but decided not to move forward. However, on March 1st, 1967, Roy Spain submitted a patent application, listing himself and his three coworkers (Roy Oliver (pictured above), Fred Wagner and Elvis Flora) as the designers. Roy and Paul split ways in the mid '60s into two separate companies, MEDECO Security Locks Co. being the lock manufacturing company.
        </p>
        <p>
          <img src={Patentone} alt="Patent from March 1st, 1967" style={{ width: '70%' }} />
        </p>
        <p>
          Although none of them wanted to be locksmiths or lock designers, they made a lock that was highly resistant to picking, which was something New York City needed at the time. The sales went live in early 1968. In the early 70s, Medeco offered a $10,000 cash prize to anyone who could pick their new lock three times. In 1972, one NYC police detective was able to open a lock but couldn't replicate the feat. He won $1,500 and was later hired by the company.
        </p>
        <p>
          This contest brought MEDECO into the spotlight, and the company began to sell very well, particularly in NYC.
        </p>
        <h3> Hillenbrand steps in</h3>
        <p>
          In 1972, Roy C. Spain sold his rights to the patent to the main company and Roy Oliver became the head of MEDECO. In 1983, Hillenbrand Industries bought MEDECO, expanding it and introducing the MEDECO Biaxial around the world.
        </p>
        <p>
          <img src={Patenttwo} alt="Biaxial pin patent" style={{ width: '70%' }} />
        </p>
        <p>
          In the mid-1990s, MEDECO continued to invest in research and development, led by Mr. Fields, to remain at the forefront of lock manufacturing. In 1996, MEDECO shifted to selling directly to retail locksmiths, and introduced the information of the coming mystery line of new locks.
        </p>
        <p>
          <img src={Sold} alt="NYT article about the sale to ASSA ABLOY Group" style={{ width: '70%' }} />
        </p>
        <p> Medeco has gotten into two lawsuits with another famous manufacturer, Emhart (otherwise known as Corbin/Russwin). Not much is known about the patent infringement case other than Medeco won and Emhart ceased manufacturing.</p>
        <h3> Assa Abloy Group takes over</h3>
        <p>
          In 1998, MEDECO was sold again, this time to the ASSA ABLOY Group. This partnership provided access to more resources and patents. Leveraging ASSA ABLOY's innovations, MEDECO finished the M3 in 2003 and launched the M4 in 2017. Both models, much like their original locks, are UL patented to ensure security against duplicate keys.
        </p>
        <p><img src={Patent3} alt="patent for m3" style={{ width:'50%' }}/></p>
        <p>Medeco3 patent</p>
        <p><img src={Patent4} alt="Medeco4 blown out" style={{ width:'50%'}} /> </p>
        <p>Medeco4 blown out to show its parts. </p>
        <p> Since the turn of the century, Medeco has innovated and grown to include electronic locks into their lineup. These models include the CLiq system, the XT system, and the Siteline. The siteline was their first attempt but was quickly followed by the Cliq system.</p>
        <p> </p>
        <h5>Here is an excerpt from the Assa Abloy Group webpage about MEDECO's history:</h5>
        <p>
          <img src={Medeco3} alt="Official history of MEDECO from ASSA ABLOY" style={{ width: '70%' }} />
        </p>
      </div>
    </div>
  );
}
