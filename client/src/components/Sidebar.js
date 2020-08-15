import React from 'react';
import { Link } from 'react-router-dom';
import SidebarIcon from './SidebarIcon';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import CallIcon from '@material-ui/icons/Call';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Sidebar = props => {
  HomeIcon.displayName = 'HomeIcon';
  FaceIcon.displayName = 'FaceIcon';
  WorkIcon.displayName = 'WorkIcon';
  CodeIcon.displayName = 'CodeIcon';
  CallIcon.displayName = 'CallIcon';
  AssignmentIndIcon.displayName = 'AssignmentIndIcon';
  
  return (
    <div className="sidebar-container">
      <div className="logo-container"><Link to="/">TL</Link></div>
      <nav className="nav-container ">
        <SidebarIcon Icon={HomeIcon} />
        <SidebarIcon Icon={FaceIcon} />
        <SidebarIcon Icon={CodeIcon} />
        <SidebarIcon Icon={WorkIcon} />
        <SidebarIcon Icon={CallIcon} />
      </nav>
      <nav className="sidebar-contact-container">
        <a className="resume-icon-wrapper" href="https://drive.google.com/file/d/1dwIWX1ftXhmCwe4qKRSUM7ZT3XlMBu0A/view?usp=sharing" target="_blank">
          <SidebarIcon Icon={AssignmentIndIcon} />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;