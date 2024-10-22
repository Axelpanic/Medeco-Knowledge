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
        <p><img src="https://www.medeco.com/content/dam/assa-abloy/americas/aeh/medeco-authored/site-imagery/about-us/medeco-history.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt='roy c spain in his basement' style={{width: '50%'}} /> </p>
        <p>
          In the 1950s, Roy Clifton Spain started his own business with Roy Oliver (pictured below) in his basement in Roanoke, Virginia. He had previously worked for Yale (yes, that Yale). He brought on two others, Fred Wagner and Elvis Flora.
        </p>
        <p>
          <img src={OliverR} alt="Roy Oliver pictured at MEDECO in Virginia" style={{ width: '70%' }} />
        </p>
        <p>
          They started the Mechanical Development Company, or MEDECO. In 1957, they had their first prototype of the key but decided not to move forward. However, on March 1st, 1967, Roy Spain submitted a patent application, listing himself and his three coworkers as the designers.
        </p>
        <p>
          <img src={Patentone} alt="Patent from March 1st, 1967" style={{ width: '70%' }} />
        </p>
        <p>
          Although none of them wanted to be locksmiths or lock designers, they made a lock that was highly resistant to picking, which was something New York City needed at the time. The sales went live in early 1968. In the early 70s, Medeco offered a $10,000 cash prize to anyone who could pick their new lock. In 1972, one NYC police detective was able to open a lock but couldn't replicate the feat. He won $1,500.
        </p>
        <p>
          This contest brought MEDECO into the spotlight, and the company began to sell very well, particularly in NYC.
        </p>
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
        <p> Medeco has gotten into two lawsuits with another famous manufacturer, Emhart (otherwise known as Corbin/Russwin or Security People, Inc.). In 1995, both parties settled out of court with an agreement of no more littigation and medeco paying SPI 'a sum of money' and SPI releasing all claims of infringment. SPI decided to sue again in 1998 and lost the case on the merits of the first case, the agreement to drop all claims of infrigement. This won the case for Medeco.</p>
        <p>
          In 1998, MEDECO was sold again, this time to the ASSA ABLOY Group. This partnership provided access to more resources and patents. Leveraging ASSA ABLOY's innovations, MEDECO finished the M3 in 2003 and launched the M4 in 2017. Both models, much like their original locks, are UL patented to ensure security against duplicate keys.
        </p>
        <p> Since the turn of the century, Medeco has innovated and grown to include electronic locks into their lineup. These models include the CLiq system, the XT system, and the Siteline. The siteline was their first attempt but was quickly followed by the Cliq system.</p>
        <p> </p>
        <h5>Here is an excerpt from the Assa Abloy Group webpage about MEDECO's history:</h5>
        <p>
          <img src={Medeco3} alt="Official history of MEDECO from ASSA ABLOY" style={{ width: '70%' }} />
        </p>
      </div>
      <div className='cardish'>
        <p>
          <h4> Sources:</h4>
        </p>
        <p> <a href="https://roanoke.com/medeco-marks-golden-anniversary-as-roanoke-county-plant-turns-50/article_baa94a53-59ee-5563-ac6c-32fb6ce176fe.html#:~:text=The%20company%27s%20roots%20begin%20in,pick%20open%20three%20Medeco%20locks" target="_blank"> Rokanoke article: Medeco Golden anniversary</a>.
        </p>
        <p> <a href="https://www.lockwiki.com/index.php/Medeco" target="blank">Lockwiki: Medeco </a>
        </p>
        <p> <a href="https://www.prweb.com/releases/Medeco_Security_Locks_Celebrates_50_Years_of_High_Security/prweb15764393.html" target="blank"> PRweb: 50 Years of High Security</a>
        </p>
        <p> <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/59/1040/2408785/" target="Blank"> SPI V Medeco lawsuit summary 1999</a>
        </p>
      </div>
    </div>
  );
}
