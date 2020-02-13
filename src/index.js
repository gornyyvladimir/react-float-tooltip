import React, { useState, useEffect, useRef, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { calcX, calcY, calcXRevert } from './helpers'
import styles from './styles.css'

function Tooltip (props) {
  const [show, setShow] = useState(false)
  const [cords, setCords] = useState({ x: 0, y: 0 })
  const [tooltipRoot] = useState(document.getElementById('tooltip-root'))

  const tooltipRef = useRef(null)

  // useEffect(() => {
  //   console.log("Mount")
  //   tooltipRoot.appendChild(el)
  //   return () => {
  //     console.log("Remove")
  //     tooltipRoot.removeChild(el)
  //   }
  // }, [])

  const handleMouseOver = event => {
    console.log(event.target)
    setShow(true)
  }

  const handleMouseLeave = event => {
    setShow(false)
  }

  const handleMouseMove = event => {
    const { offset } = props
    const { clientX, clientY } = event
    const { x, y } = getTooltipPosition(clientX, clientY, offset)
    setCords({ x, y })
  }

  const getTooltipPosition = (clientX, clientY, offset = 0) => {
    const { isRevert } = props
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const tooltipWidth = tooltipRef.current.getBoundingClientRect().width
    const tooltipHeight = tooltipRef.current.getBoundingClientRect().height
    const x = isRevert
      ? calcXRevert(clientX, tooltipWidth, windowWidth, offset)
      : calcX(clientX, tooltipWidth, windowWidth, offset)
    const y = calcY(clientY, tooltipHeight, windowHeight, offset)
    return { x, y }
  }

  const tooltip = (
    <div
      ref={tooltipRef}
      className={styles.tooltip}
      style={{ left: cords.x, top: cords.y }}
      data-test='component-tooltip'
    >
      {props.tooltipElement()}
    </div>
  )

  if (props.disable) return props.children

  return (
    <Fragment>
      {show && ReactDOM.createPortal(tooltip, tooltipRoot)}
      <div
        data-test='component-children-wrapper'
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={props.className}
        style={props.style}
      >
        {props.children}
      </div>
    </Fragment>
  )
}

Tooltip.propTypes = {
  disable: PropTypes.bool,
  isRevert: PropTypes.bool,
  offset: PropTypes.number,
  tooltipElement: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Tooltip
