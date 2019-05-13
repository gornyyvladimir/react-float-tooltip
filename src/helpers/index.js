export const calcX = (clientX, tooltipWidth, windowWidth, offsetX = 0) => {
  const sum = clientX + tooltipWidth + offsetX
  const x = sum > windowWidth ? clientX - (sum - windowWidth) : clientX
  return x
}

export const calcXRevert = (clientX, tooltipWidth, windowWidth, offsetX = 0) => {
  const sum = clientX + tooltipWidth + offsetX
  const leftEdge = 0 + offsetX
  if (sum > windowWidth) {
    return clientX - tooltipWidth > leftEdge ? clientX - tooltipWidth : leftEdge
  }
  return clientX
}

export const calcY = (clientY, tooltipHeight, windowHeight, offsetY = 0) => {
  const sum = clientY + tooltipHeight + offsetY
  const y = sum > windowHeight ? clientY - (sum - windowHeight) : clientY
  return y
}
