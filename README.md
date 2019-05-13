# react-float-tooltip

> 

[![NPM](https://img.shields.io/npm/v/react-float-tooltip.svg)](https://www.npmjs.com/package/react-float-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-float-tooltip
```

or

```bash
yarn add react-float-tooltip
```

## Usage

1 . Add id="tooltip-root" to your index.html under id="root"
```html
<div id="root"></div>
<!-- put your tooltip container here -->
<div id="tooltip-root"></div>
```

2 . Use this simple example

```jsx
import React, { Component } from 'react'
import Tooltip from 'react-float-tooltip'

class App extends Component {
  render() {
    return (
      <div>
        <Tooltip tooltipElement={() => <div style={{background: 'yellow'}}>Tooltip</div>}>
          <div>Element with tooltip</div>
        </Tooltip>
      </div>
    );
  }
}
```

## Examples
You can find examples in "examples" folder

Online examples: <https://gornyyvladimir.github.io/react-float-tooltip/>

## Api
### Props

| name           | type          | default | isRequired | description                                           |
|----------------|---------------|---------|------------|-------------------------------------------------------|
| disable        | boolean       | false   | false      | disable tooltip                                       |
| isRevert       | boolean       | false   | false      | revert tooltip if it has no place from the right edge |
| offset         | number        | 0       | false      | tooltip offset from right edge                        |
| tooltipElement | function      |         | true       | function that returns component for render tooltip    |
| children       | React.Element |         | true       | wrapped element                                       |

## License

MIT © [gornyyvladimir](https://github.com/gornyyvladimir)
