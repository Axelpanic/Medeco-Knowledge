import React from 'react';
import "../../assets/style/pages.css";

export default function Home() {
  return (
    <div className='content'>
      <h1>MEDECO Electronic Locks</h1>
      <div className='cardish'>
        <p>
          <h3> MEDECO Siteline </h3>
        </p>
        <p>
            The Medeco Siteline electronic was Medeco's first dip into electronic solutions to security. The good? It was battery powered, included a medeco style key for key control plus electronics, and allowed for key control remotely.
            From all the information I can find, it was not widely accepted by the masses. Regardless, it had some amazing features, control access for 1200 uses and up to 800 transactions. Printable report date to audit access. Flexible scheduling to turn off doors and keys at certain times.
            This system did a fantastic job, but was likely either too expensive or not well advertised. What ever the case may be, their first dip into electronic locks, debuting in 1997, was not the last.
        </p>
      </div>
      <div className='cardish'>
        <p>
            <h3> MEDECO Cliq </h3>
        </p>
        <p>
            <img src='https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1081366' alt="medeco cliq deadbolt" style={{ width: '50%' }} />
        </p>
        <p>
            The second attempt at a electronic system was the Cliq locks, launched in 2005. These locks provided systems from Medeco and from Assa Aboly, adding a tried and true electronic system universally used between assa abloy group manufactures.
            These keys, powered by a cell battery found in watches, were good for several thousands of uses. The key also used medeco tumbler pins for even more security! 
            This system has all the previous benifits of the Siteline system and a new software that was much more streamlined adding to customer adoption. The cliq system has lasted thru to today. The newest version including Bluetooth programming through iOS and android OS.
            The best part of this system is that it works with X4, M3, M4, and even bilevel locks. They also worked with both IC bodies, cylinders, deadbolts, KIK, and even some odd sizes from Assa Abloy group.
        </p>
      </div>
      <div className='cardish'>
        <p>
            <h3> MEDECO XT </h3>
        </p>
        <p> <img src='https://ik.imagekit.io/twr9df4sfpl/dam/dam/AADSS1248410' alt="xt system locks" style= {{ width: '50%' }} /> </p>
        <p>
            The XT system is the latest and greatest electronic system from Medeco. This system uses a single key style and possibly keyway to allow access to the lock. The keys are prgrammed to open specific locks. All of the power is in the key, much like the cliq. This system really only has one difference in my opnion, it fits inside of cam locks. Otherwise, the only difference from the cliq system appears to be a rechargable key rather than a watch battery and the ability to have a dual custody cylinder.
            I don't have too much information about the XT system at this time.
        </p>
      </div>
    </div>
  );
}