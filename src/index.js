import React, { useState, useEffect, useRef, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { calcX, calcY, calcXRevert } from './helpers'
import styles from './styles.css'

const Tooltip = ({ isRevert, tooltipElement, disable, children, className, style, offset = 0 }) => {
  const [show, setShow] = useState(false)
  const [cords, setCords] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef(null)

  const elRef = useRef(null)
  const tooltipRootRef = useRef(null)

  useEffect(() => {
    const tooltipRoot = document.getElementById('tooltip-root')
    const el = document.createElement('div')

    elRef.current = el
    tooltipRootRef.current = tooltipRoot

    tooltipRootRef.current.appendChild(elRef.current)
    return () => {
      tooltipRootRef.current.removeChild(elRef.current)
    }
  }, [])

  const handleMouseOver = event => {
    setShow(true)
  }

  const handleMouseLeave = event => {
    setShow(false)
  }

  const handleMouseMove = event => {
    const { clientX, clientY } = event
    const { width, height } = tooltipRef.current.getBoundingClientRect()
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const x = isRevert
      ? calcXRevert(clientX, width, windowWidth, offset)
      : calcX(clientX, width, windowWidth, offset)
    const y = calcY(clientY, height, windowHeight, offset)
    setCords({ x, y })
  }

  const tooltip = (
    <div
      ref={tooltipRef}
      className={styles.tooltip}
      style={{ left: cords.x, top: cords.y }}
      data-test='component-tooltip'
    >
      {tooltipElement()}
    </div>
  )

  if (disable) return children

  return (
    <Fragment>
      {show && ReactDOM.createPortal(tooltip, elRef.current)}
      <div
        data-test='component-children-wrapper'
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={className}
        style={style}
      >
        {children}
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
