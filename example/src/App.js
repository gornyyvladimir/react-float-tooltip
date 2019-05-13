import React, { Component } from 'react';
import ElementWithTooltip from './ElementWithTooltip';
import Tooltip from 'react-float-tooltip';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Row">
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
              isRevert
              disable
              tooltipElement={() => <div className="tooltipElement">Reverted and disabled Tooltip</div>}
            >
              <ElementWithTooltip>Reverted and disabled Tooltip</ElementWithTooltip>
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
        <div className="Row">
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
        <div className="Row">
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
      </div>
    );
  }
}

export default App;
