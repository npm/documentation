import React from 'react'

export default class NpmLogo extends React.Component {
  render() {
    const bgcolor = this.props.bg || '#cb0000'
    const fgcolor = this.props.fg || '#ffffff'

    return (
      <svg
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 700 700"
        fill="currentColor"
        style={this.props.style}
        aria-hidden="true"
      >
        <polygon fill={bgcolor} points="0,700 700,700 700,0 0,0" />
        <polygon fill={fgcolor} points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
      </svg>
    )
  }
}
