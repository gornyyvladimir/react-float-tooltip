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
<div id="tooltip-root"></div>
```

2 . Use this example

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

## License

MIT © [gornyyvladimir](https://github.com/gornyyvladimir)
