import React from 'react'

const NpmLogo = ({size, style}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 700 700" fill="currentColor" style={style} aria-hidden="true">
      <polygon fill="#cb0000" points="0,700 700,700 700,0 0,0" />
      <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
    </svg>
  )
}

export default NpmLogo
