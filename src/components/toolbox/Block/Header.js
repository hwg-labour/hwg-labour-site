import React, { Component } from 'react'

export default class Header extends Component {
  static className = 'BlockHeader'

  render() {
    const { children, className, ...rest } = this.props

    return (
      <div {...rest}>
        {children}
      </div>
    )
  }
}
