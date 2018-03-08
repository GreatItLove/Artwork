import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const loaderHOC = (key, value, style) => WrappedComponent => {
  const defaultStyle = { position: 'absolute', top: '30%', left: '50%' };
  const refreshIndicatorStyle = { ...defaultStyle, ...style };

  return function (props) {
    return props[key] === value ? (
      <div style={refreshIndicatorStyle}>
        <RefreshIndicator left={0} top={0} status="loading" />
      </div>
    ) : (
        <WrappedComponent {...props} />
      );
  };
};

export default loaderHOC;
