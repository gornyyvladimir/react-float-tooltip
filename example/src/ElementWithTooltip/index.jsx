import React from 'react';
import './style.css';

const ElementWithTooltip = props => {
  return <div className='elementWithTooltip' {...props}>{props.children}</div>;
};

export default ElementWithTooltip;
