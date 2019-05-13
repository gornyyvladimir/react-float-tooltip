import { calcX, calcY, calcXRevert } from './'

describe('CalcX', () => {
  const clientX = 500
  const tooltipWidth = 150
  const windowWidth = 600
  const offsetX = 25
  test('calcX gives right position if tooltip over the screen', () => {
    const sum = clientX + tooltipWidth + offsetX
    const expectedResult = clientX - (sum - windowWidth)
    const result = calcX(clientX, tooltipWidth, windowWidth, offsetX)
    expect(result).toBe(expectedResult)
  })
  test('calcX gives right position if offset default', () => {
    const sum = clientX + tooltipWidth
    const expectedResult = clientX - (sum - windowWidth)
    const result = calcX(clientX, tooltipWidth, windowWidth)
    expect(result).toBe(expectedResult)
  })
  test('calcX gives right position if tooltip NOT over the screen', () => {
    const clientX = 300
    const result = calcX(clientX, tooltipWidth, windowWidth, offsetX)
    expect(result).toBe(clientX)
  })
})

describe('CalcY', () => {
  const clientY = 500
  const tooltipHeight = 150
  const windowHeight = 600
  const offsetY = 25
  test('calcY gives right position if tooltip over the screen', () => {
    const sum = clientY + tooltipHeight + offsetY
    const expectedResult = clientY - (sum - windowHeight)
    const result = calcY(clientY, tooltipHeight, windowHeight, offsetY)
    expect(result).toBe(expectedResult)
  })
  test('calcY gives right position if offset default', () => {
    const sum = clientY + tooltipHeight
    const expectedResult = clientY - (sum - windowHeight)
    const result = calcY(clientY, tooltipHeight, windowHeight)
    expect(result).toBe(expectedResult)
  })
  test('calcY gives right position if tooltip NOT over the screen', () => {
    const clientY = 300
    const result = calcY(clientY, tooltipHeight, windowHeight, offsetY)
    expect(result).toBe(clientY)
  })
})

describe('calcXRevert', () => {
  const clientX = 500
  const tooltipWidth = 150
  const windowWidth = 600
  const offsetX = 25
  test('calcXRevert gives right position if tooltip over the screen', () => {
    const expectedResult = 350
    const result = calcXRevert(clientX, tooltipWidth, windowWidth, offsetX)
    expect(result).toBe(expectedResult)
  })
  test('calcXRevert gives right position if offset default', () => {
    const expectedResult = 350
    const result = calcXRevert(clientX, tooltipWidth, windowWidth)
    expect(result).toBe(expectedResult)
  })
  test('calcXRevert gives right position if tooltip NOT over the screen', () => {
    const clientX = 300
    const result = calcXRevert(clientX, tooltipWidth, windowWidth, offsetX)
    expect(result).toBe(clientX)
  })
  test('calcXRevert gives right position if over left edge', () => {
    const clientX = 150
    const tooltipWidth = 150
    const windowWidth = 300
    const offsetX = 25
    const expectedResult = offsetX
    const result = calcXRevert(clientX, tooltipWidth, windowWidth, offsetX)
    expect(result).toBe(expectedResult)
  })
})
