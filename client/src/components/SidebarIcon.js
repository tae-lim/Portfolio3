import React from 'react';
import { Link } from 'react-router-dom'
import * as ReactTransitionGroup from 'react-transition-group';

const iconProps = {
  HomeIcon: {
    link: '/',
    text: 'Home',
    isExternalLink: false,
  },
  FaceIcon: {
    link: '/about',
    text: 'About',
    isExternalLink: false
  },
  WorkIcon: {
    link: '/work',
    text: 'Work',
    isExternalLink: false
  },
  CodeIcon: {
    link: '/skills',
    text: 'Skills',
    isExternalLink: false
  },
  CallIcon: {
    link: '/contact',
    text: 'Contact',
    isExternalLink: false
  },
  AssignmentIndIcon: {
    link: 'https://drive.google.com/file/d/1CPeWLeXQSmXTI9CcWJOQGqLU-0XN6dI1/view?usp=sharing',
    text: 'Resume',
    isExternalLink: true
  }
};
  
const SidebarIcon = props => {
  const { Icon } = props;
  const [isHovered, setHover] = React.useState(false);

  const mapIconName = (iconName, type) => {
    if (type === 'link') return iconProps[iconName].link;
    return iconProps[iconName].text;
  }

  const text = mapIconName(Icon.displayName, 'text');
  const link = mapIconName(Icon.displayName, 'link');

  const view = isHovered ? (
    <span key={text}>{text}</span>
  ) : (
    <Icon key={link}/>
  );

  const internalOrExternalLink = iconProps[Icon.displayName].isExternalLink ? (
    <div className='sidebar-icon-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <ReactTransitionGroup.CSSTransition
        in={isHovered}
        classNames="icon"
        timeout={700}
      >
        {view}
      </ReactTransitionGroup.CSSTransition>
    </div>
    ) : (
    <Link to={link}>
      <div className='sidebar-icon-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <ReactTransitionGroup.CSSTransition
          in={isHovered}
          classNames="icon"
          timeout={700}
        >
          {view}
        </ReactTransitionGroup.CSSTransition>
      </div>
    </Link>
  );

  return (
    internalOrExternalLink
  );
};

export default SidebarIcon;