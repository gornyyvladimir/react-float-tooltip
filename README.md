# react-float-tooltip

[![NPM](https://img.shields.io/npm/v/react-float-tooltip.svg)](https://www.npmjs.com/package/react-float-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Preview

![react-float-tooltip gif](https://raw.githubusercontent.com/gornyyvladimir/react-float-tooltip/master/tooltip.gif)

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

export default App;
```

## Examples
You can find examples in "examples" folder.

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
| className      | string        |         | false      | className for children wrapper component              |
| style          | Object        |         | false      | style for children wrapper component                  |

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag 
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab) 
cd example
npm start # runs create-react-app dev server 
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

Check [create-react-library](https://www.npmjs.com/package/create-react-library) documentation for development.

## License

MIT © [gornyyvladimir](https://github.com/gornyyvladimir)