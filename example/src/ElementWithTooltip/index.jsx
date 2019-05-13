import React from 'react';
import './style.css';

const ElementWithTooltip = props => {
  return <div className='elementWithTooltip' data-test="component-element-with-tooltip" {...props} >{props.children}</div>;
};

export default ElementWithTooltip;
