import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import * as React from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const Contact= () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        size: 0.80,
        color: '#0569FF',
        backgroundColor: '#00315c'
      }));
    }
    return () => {
      //@ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="contact-container" ref={myRef}>
      <div className="contact-me-container">
        <h1 className="animated animatedFadeRight fadeInRight">Contact Me</h1>
        <nav className="contact-icon-container animated animatedFadeRight fadeInRight">
          <a className="contact-icon-wrapper" href="https://drive.google.com/file/d/1CPeWLeXQSmXTI9CcWJOQGqLU-0XN6dI1/view?usp=sharing" target="_blank">
            <AssignmentIndIcon />
          </a>
          <a className="contact-icon-wrapper" href="mailto:taelim92@gmail.com" target="_blank">
            <MailOutlineIcon />
          </a>
          <a className="contact-icon-wrapper" href="https://www.linkedin.com/in/tae-lim/" target="_blank">
            <LinkedInIcon />
          </a>
          <a className="contact-icon-wrapper" href="https://github.com/tae-lim" target="_blank">
            <GitHubIcon />
          </a>
          <a className="contact-icon-wrapper" href="https://www.instagram.com/taestybits/" target="_blank">
            <InstagramIcon />
          </a>
        </nav>
      </div>
      <div className="locations-container animated animatedFadeRight fadeInRight">
        <p>I am interested in work at these locations</p>
        <ul className="locations-list">
          <li>San Fracisco Bay Area</li>
          <li>Greater Los Angeles Area</li>
          <li>Dallas, TX</li>
          <li>New York, NY</li>
          <li>Chicago, IL</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;