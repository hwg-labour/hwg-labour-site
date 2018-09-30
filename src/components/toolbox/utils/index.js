import React from 'react'

const getChildrenByType = (Type, children) => {
  if (!children || !Type) {
    return null
  }

  return React.Children.toArray(children).filter(child => {
    /*
    todo type equality should not use a custom static field on the class but the class itself
    child.type === Type should work but unfortunately during development the hot loader is breaking this
    https://github.com/gaearon/react-hot-loader/issues/304, it is too much work to update the hor loader now so
    I'm leaving this workaround here till we can upgrade react-hot-loader
     */
    return child.type.className === Type.className || child.type === Type
  })
}

export { getChildrenByType }
