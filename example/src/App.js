import React, { Component } from 'react';
import ElementWithTooltip from './ElementWithTooltip';
import Tooltip from 'react-float-tooltip';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>react-float-tooltip</h1>
          <p>Float tooltip for react components</p>
        </div>
        <div className="row">
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => <div className="tooltipElement">Reverted Tooltip</div>}
            >
              <ElementWithTooltip>Reverted Tooltip</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              disable
              tooltipElement={() => (
                <div className="tooltipElement">Disabled Tooltip</div>
              )}
            >
              <ElementWithTooltip>Disabled Tooltip</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => <div className="tooltipElement">Reverted Tooltip</div>}
            >
              <ElementWithTooltip>Reverted Tooltip</ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
        <div className="row">
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">Simple tooltip with offset 10</div>
              )}
            >
              <ElementWithTooltip>Simple tooltip with offset 10</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">Simple tooltip with offset 10</div>
              )}
            >
              <ElementWithTooltip>Simple tooltip with offset 10</ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">Simple tooltip with offset 10</div>
              )}
            >
              <ElementWithTooltip>Simple tooltip with offset 10</ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
        <div className="row">
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <ElementWithTooltip>
                Reverted tooltip with maxWidth on tooltipElement
              </ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <ElementWithTooltip>
                Reverted tooltip with maxWidth on tooltipElement
              </ElementWithTooltip>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <ElementWithTooltip>
                Reverted tooltip with maxWidth on tooltipElement
              </ElementWithTooltip>
            </Tooltip>
          </div>
        </div>
        <div>
          <Tooltip
            className="tooltipWrapper"
            tooltipElement={() => (
              <div className="tooltipElement">Without inline-block for tooltip wrapper</div>
            )}
          >
            <ElementWithTooltip>Without inline-block for tooltip wrapper</ElementWithTooltip>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            className="tooltipWrapper inline"
            tooltipElement={() => (
              <div className="tooltipElement">With inline-block for tooltip wrapper</div>
            )}
          >
            <ElementWithTooltip>With inline-block for tooltip wrapper</ElementWithTooltip>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default App;
