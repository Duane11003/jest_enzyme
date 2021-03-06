import checkPropTypes from 'check-prop-types'

/**
 * Returns node(s) with the given data-test attribute
 * 
 */


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, props) => {
    const propError = checkPropTypes(component.propTypes, props, 'prop', component.name)
    expect(propError).toBeUndefined();
}