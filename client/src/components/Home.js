import * as React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
//import * as ReactTransitionGroup from 'react-transition-group';

const Home = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#1a478c',
        shininess: 16.00,
        waveHeight: 8.00,
        zoom: 1.38,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="home-container" ref={myRef}>
      <h1 className="animated-slow animatedFadeIn fadeInUp">Hi,</h1>
      <h1 className="animated-slow animatedFadeIn fadeInUp">I'm Tae Lim</h1>
      <h2 className="animated-slow animatedFadeIn fadeInUp">Software Developer</h2>
      <h4 className="animated-slow animatedFadeIn fadeInUp">Frontend / Backend / Fullstack</h4>
    </div>
  );
}

export default Home;