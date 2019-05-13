import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { calcX, calcY, calcXRevert } from './helpers'
import styles from './styles.css'

class Tooltip extends Component {
  state = {
    show: false,
    x: 0,
    y: 0
  };

  tooltipRoot = document.getElementById('tooltip-root');
  el = document.createElement('div');
  tooltipRef = React.createRef();

  componentDidMount() {
    this.tooltipRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.tooltipRoot.removeChild(this.el)
  }

  handleMouseOver = event => {
    this.setState({ show: true })
  };

  handleMouseLeave = event => {
    this.setState({ show: false })
  };

  handleMouseMove = event => {
    const { offset } = this.props
    const { clientX, clientY } = event
    const { x, y } = this.getTooltipPosition(clientX, clientY, offset)
    this.setState({ x, y })
  };

  getTooltipPosition = (clientX, clientY, offset = 0) => {
    const { isRevert } = this.props
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const tooltipWidth = this.tooltipRef.current.getBoundingClientRect().width
    const tooltipHeight = this.tooltipRef.current.getBoundingClientRect().height
    const x = isRevert
      ? calcXRevert(clientX, tooltipWidth, windowWidth, offset)
      : calcX(clientX, tooltipWidth, windowWidth, offset)
    const y = calcY(clientY, tooltipHeight, windowHeight, offset)
    return { x, y }
  };

  render() {
    const { show, x, y } = this.state
    const { tooltipElement, disable, children } = this.props

    if (disable) return children

    const tooltip = (
      <div
        ref={this.tooltipRef}
        className={styles.tooltip}
        style={{ left: x, top: y }}
        data-test='component-tooltip'
      >
        {tooltipElement()}
      </div>
    )

    return (
      <Fragment>
        {show && ReactDOM.createPortal(tooltip, this.el)}
        <div
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          data-test='component-children-wrapper'
        >
          {children}
        </div>
      </Fragment>
    )
  }
}

Tooltip.propTypes = {
  disable: PropTypes.bool,
  isRevert: PropTypes.bool,
  offset: PropTypes.number,
  tooltipElement: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Tooltip
