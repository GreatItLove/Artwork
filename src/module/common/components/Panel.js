import React from 'react';
import classNames from 'classnames';

const Panel = props => {
  const panelClass = classNames({
    'readmin-panel': true,
    'body-text-center': props.center
  });

  const panelHeadingClassName = classNames({
    'panel-heading': true,
    [props.panelHeadingClassName]: props.panelHeadingClassName
  });

  return (
    <div className={panelClass} style={props.style}>
      <div className={panelHeadingClassName} style={props.headingStyle}>
        <h5 style={props.titleStyle}>
          {props.title}
          {props.refresh}
        </h5>
        {props.rightElement}
      </div>
      <div className="panel-body">{props.children}</div>
      <div className="pb-2">{props.actions}</div>
    </div>
  );
};

export default Panel;
