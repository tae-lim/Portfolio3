import * as React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const TechStack = props => {
  const { appInfo } = props;

  const [view, setView] = React.useState(false);

  const frontEnd = appInfo.feLanguages ? (
    <div className="tech-stack-info">
      <div className="stack-info-header">
        <h4>Front End</h4>
      </div>
      <div className="stack-info-languages">
        <span>Languages</span>
        <span className="stack-info-content">{appInfo.feLanguages}</span>
      </div >
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <span className="stack-info-content">{appInfo.feFLT}</span>
      </div>
    </div>
  ) : '';

  const backEnd = appInfo.beLanguages ? (
    <div className="tech-stack-info">
      <div className="stack-info-header">
        <h4>Back End</h4>
      </div>
      <div className="stack-info-languages">
        <span>Languages</span>
        <span className="stack-info-content">{appInfo.beLanguages}</span>
      </div>
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <span className="stack-info-content">{appInfo.beFLT}</span>
      </div>
    </div>
  ) : '';

  const divider = appInfo.feLanguages && appInfo.beLanguages ? <span className="tech-stack-divider"></span> : ''; 
  const url = appInfo.url ? <a className="app-info-link" href={appInfo.url} target="_blank">Website</a> : '';
  const github = appInfo.github ? <a className="app-info-link" href={appInfo.github} target="_blank">Github</a> : '';

  const currentView = view ? (
    <div
      className="tech-stack-container"
      key={`${appInfo.name}-info`}
      onMouseEnter={() => setView(true)} 
      onMouseLeave={() => setView(false)} 
    >
      <div className="tech-stack-wrapper">
        {frontEnd}
        {divider}
        {backEnd}
      </div>
      <div className="app-info-links">
        {url}
        {github}
      </div>
    </div>
  ) : (
    <div
      className="tech-stack-container"
      key={`${appInfo.name}-image`}
      onMouseEnter={() => setView(true)} 
      onMouseLeave={() => setView(false)} 
    >
      <img src={appInfo.img} alt={appInfo.name} object-fit='contain'/>
    </div>
  );

  return (
    <div className="app-info-container">
      <div className="app-info-header">
        <h3 className="vertical-timeline-element-title">{appInfo.name}</h3>
        <p>{appInfo.description}</p>
      </div>
      <ReactCSSTransitionReplace 
        transitionName="cross-fade"
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={500}
      >
        {currentView}
      </ReactCSSTransitionReplace>
    </div>
  );
};

export default TechStack;