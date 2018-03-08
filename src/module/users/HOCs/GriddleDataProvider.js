import React from 'react';

const GriddleDataProvider = data => WrappedCompnent => {
  return function(prop) {
    return <WrappedCompnent {...data} {...prop} />;
  };
};

export default GriddleDataProvide;
