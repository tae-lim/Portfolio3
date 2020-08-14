import * as React from 'react';
import TaeIcon from '../assets/tae.png';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const About = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: '#01539D',
        midtoneColor: '#86b3d2',
        lowlightColor: '#86a2b9',
        baseColor: '#c0cacf',
        speed: 1.20,
        zoom: 2.60
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="about-container" ref={myRef}>
      <div className="animated animatedFadeDown fadeInDown">
        <h1>Welcome,</h1>
        <h1>I'm glad you're here!</h1>
      </div>
      <div className="about-section-container animated animatedFadeRight fadeInRight">
        <div className="about-section">
          <p>I'm Tae. I constantly seek new challenges and I'm not afraid to fail in the pursuit of greatness</p>
          <p>Because of my relentless desire to provide value for this world, I constantly seek growth in all facets of life</p>
          <p>I thrive in environments where everyone is respected and there's an open platform to voice opinions</p>
        </div>
        <div className="about-section animated animatedFadeLeft fadeInLeft">
          <img className="animated animatedFadeLeft fadeInLeft" src={TaeIcon} alt="Tae Lim"/>
        </div>
      </div>
    </div>
  );
};

export default About;
