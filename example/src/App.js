import React, { Component } from 'react';
import ElementWithTooltip from './ElementWithTooltip';
import Tooltip from 'react-float-tooltip'
import './App.css';

const text = 'Very long long long long long text';

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <div className="Row">
          <div>
            <Tooltip isRevert tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{text}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip isRevert tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{text}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip isRevert disable tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{`Tooltip disabled ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
        <div className="Row">
          <div>
            <Tooltip offset={10} tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{`Revert is off ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip offset={10} tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{`Revert is off ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip offset={10} tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement">{text}</div>}>
              <ElementWithTooltip>{`Revert is off ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
        <div className="Row">
          <div>
            <Tooltip isRevert tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement" style={{maxWidth: '140px'}}>{text}</div>}>
              <ElementWithTooltip>{`Add max width ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip isRevert tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement" style={{maxWidth: '140px'}}>{text}</div>}>
              <ElementWithTooltip>{`Add max width ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip isRevert tooltipElement={() => <div data-test="component-tooltip" className="tooltipElement" style={{maxWidth: '140px'}}>{text}</div>}>
              <ElementWithTooltip>{`Add max width ${text}`}</ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
