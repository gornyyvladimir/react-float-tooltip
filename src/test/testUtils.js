import CheckPropTypes from 'check-prop-types'
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

export const checkProps = (component, expectedProps) => {
  const propError = CheckPropTypes(component.propTypes, expectedProps, 'prop', component.name)
  expect(propError).toBeUndefined()
}
