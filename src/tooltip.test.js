import React from 'react'
import { shallow, mount } from 'enzyme'
import { findByTestAttr, checkProps } from './test/testUtils'
import Tooltip from './'
import * as helpers from './helpers'

const tooltipElement = () => <div>Tooltip Element</div>
const children = <div data-test='component-children'>Wrapped component</div>
const defaultProps = { tooltipElement, children }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = mount(<Tooltip {...setupProps} />)
  return wrapper
}

const shallowSetup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<Tooltip {...setupProps} />)
  return wrapper
}

describe('Tooltip', () => {
  let wrapper
  const tooltipRoot = global.document.createElement('div')
  tooltipRoot.setAttribute('id', 'tooltip-root')
  const body = global.document.querySelector('body')
  body.appendChild(tooltipRoot)

  afterEach(() => {
    wrapper.unmount()
  })

  test('renders without crashing', () => {
    wrapper = setup()
    const childrenWrapperComponent = findByTestAttr(wrapper, 'component-children-wrapper')
    expect(wrapper.find('Tooltip').length).toBe(1)
    expect(childrenWrapperComponent.length).toBe(1)
  })
  test('renders children without crashing', () => {
    wrapper = setup({ children })
    const childrenComponent = findByTestAttr(wrapper, 'component-children')
    expect(childrenComponent.length).toBe(1)
  })
  test('render only children if disable prop is true', () => {
    wrapper = setup({ children, disable: true })
    const childrenComponent = findByTestAttr(wrapper, 'component-children')
    const childrenWrapperComponent = findByTestAttr(wrapper, 'component-children-wrapper')
    expect(childrenComponent.length).toBe(1)
    expect(childrenWrapperComponent.length).toBe(0)
  })
  test('should change state onMouseOver', () => {
    wrapper = setup()
    const childrenWrapperComponent = findByTestAttr(wrapper, 'component-children-wrapper')
    childrenWrapperComponent.simulate('mouseOver')
    expect(wrapper.state('show')).toBeTruthy()
  })
  test('should change state onMouseLeave', () => {
    wrapper = setup()
    wrapper.instance().setState({ show: true })
    const childrenWrapperComponent = findByTestAttr(wrapper, 'component-children-wrapper')
    childrenWrapperComponent.simulate('mouseLeave')
    expect(wrapper.instance().state.show).toBeFalsy()
  })
  test('should change state onMouseMove', () => {
    global.width = 600
    global.height = 400
    wrapper = setup()
    wrapper.instance().tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 20
        })
      }
    }
    wrapper.update()
    const clientX = 550
    const clientY = 380
    const childrenWrapperComponent = findByTestAttr(wrapper, 'component-children-wrapper')
    childrenWrapperComponent.simulate('mouseMove', { clientX, clientY })
    expect(wrapper.instance().state.x).toBe(500)
    expect(wrapper.instance().state.y).toBe(380)
  })
})
test('does not throw warning with expected props', () => {
  const tooltipElement = () => <div>Tooltip Element</div>
  const children = <div data-test='component-children'>Wrapped component</div>
  const expectedProps = {
    tooltipElement,
    children,
    disable: false,
    isRevert: true,
    offset: 0,
    className: 'class',
    style: { background: 'yellow' }
  }
  checkProps(Tooltip, expectedProps)
})
describe('Tooltip position is correct', () => {
  global.window.innerWidth = 600
  global.window.innerHeight = 400
  let wrapper
  beforeEach(() => {
    wrapper = shallowSetup()
    wrapper.instance().tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 20
        })
      }
    }
  })
  test('getTooltipPosition return right value if tooltip out of the screen', () => {
    const clientX = 550
    const clientY = 380
    const offset = 10
    const expectedPosition = {
      x: 490,
      y: 370
    }
    const newPosition = wrapper.instance().getTooltipPosition(clientX, clientY, offset)
    expect(newPosition).toEqual(expectedPosition)
  })
  test('getTooltipPosition return right value if tooltip NOT out of the screen', () => {
    const clientX = 10
    const clientY = 20
    const offset = 10
    const expectedPosition = {
      x: 10,
      y: 20
    }
    const newPosition = wrapper.instance().getTooltipPosition(clientX, clientY, offset)
    expect(newPosition).toEqual(expectedPosition)
  })
  test('getTooltipPosition return right value if offset is default (0)', () => {
    const clientX = 550
    const clientY = 380
    const expectedPosition = {
      x: 500,
      y: 380
    }
    const newPosition = wrapper.instance().getTooltipPosition(clientX, clientY)
    expect(newPosition).toEqual(expectedPosition)
  })
})

describe('calcX and calcY is called correctly', () => {
  test('calcX was called', () => {
    helpers.calcX = jest.fn()
    const wrapper = shallowSetup()
    wrapper.instance().tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 20
        })
      }
    }
    wrapper.update()
    const clientX = 10
    const clientY = 20
    wrapper.instance().getTooltipPosition(clientX, clientY)
    expect(helpers.calcX).toBeCalled()
  })
  test('calcXRevert was called if isRevert true', () => {
    helpers.calcXRevert = jest.fn()
    const wrapper = shallowSetup({isRevert: true})
    wrapper.instance().tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 20
        })
      }
    }
    wrapper.update()
    const clientX = 10
    const clientY = 20
    wrapper.instance().getTooltipPosition(clientX, clientY)
    expect(helpers.calcXRevert).toBeCalled()
  })
  test('calcY was called', () => {
    helpers.calcY = jest.fn()
    const wrapper = shallowSetup()
    wrapper.instance().tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 20
        })
      }
    }
    wrapper.update()
    const clientX = 10
    const clientY = 20
    wrapper.instance().getTooltipPosition(clientX, clientY)
    expect(helpers.calcY).toBeCalled()
  })
})
