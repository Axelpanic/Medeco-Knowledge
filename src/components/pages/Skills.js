import React from 'react';
import "../../assets/style/pages.css";

export default function About() {
  return (
    <div className='content'>
      <h2 style={{color:"#FFFAFA"}}>Resources on Picking MEDECO</h2>
      <div className='cardish'>
          <h4>
            My videos
          </h4>
        <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3eluNKNFVMw?si=eQt8NbQExkHl1Oie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/sp4f_-ueDO0?si=ncu3uZuAVRRnEjY1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/cDsQbfG29dw?si=s1X_iLit2hamvRHH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p> 
      </div>
      <div className='cardish'>
        <p>
          <h4>
            Clicky Test
          </h4>
          <p> From Alpama</p>
        </p>
        <p>
          <iframe width="auto" height="auto" src="https://www.youtube.com/embed/3SQvIZOZV5s?si=OZIbyhB4qgacWuq0" title="clicky test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> 
        </p> 
      </div>
      <div className='cardish'>
        <p>
          <h4>Progressive pinning</h4>
          <p>brought to you by Digs (US) and LPU</p>
        </p>
        <p> <iframe width="auto" height="auto" src="https://www.youtube.com/embed/-xA1RVqkzCE?si=0jvBw1Ub9ZiLgPrK" title="clicky test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> </p>
      </div>
      <div className='cardish'>
        <p> 
            Below, You will find several other Lockpicker United members and their information and picking videos on Medeco locks
            </p>
            <p>
              <h4> Lockfall Laboratories</h4>
              </p>
              <p>
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Vrh3ZVlde3M?si=ZWHE2UelldIKX8ah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </p>
            <p>
              <h4>Artichoke 2000</h4>
              </p>
              <p>
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/DNpAIZl4krc?si=sUgIzlLa22fUAL8V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </p>
            <p>
              <h4>Georgia Jim</h4> </p>
              <p><iframe className='iframe' width="auto" height="auto" src="https://www.youtube.com/embed/JTnYYhhBkkQ?si=CVcMPR9s8wcG1y9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> </p>
              <p><iframe className='iframe' width="auto" height="auto" src="https://www.youtube.com/embed/OsJure9m4B4?si=bwK8rboO4aojMbcC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </p>
      </div>
      <div className='cardish'>
        <p>
          <h3> The Medecoder</h3>
        </p>
        <p><a href="http://www.theamazingking.com/medecoder.php" target="blank"> Link to the Medecoder website</a> </p>
      </div>
    </div>
  );
}