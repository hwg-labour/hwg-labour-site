import React, { Component } from 'react'

export default class Content extends Component {
  static className = 'BlockContent'

  render() {
    const { children, className, ...rest } = this.props

    return (
      <div {...rest}>
        {children}
      </div>
    )
  }
}
