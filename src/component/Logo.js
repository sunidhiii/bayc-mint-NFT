import React from 'react'

const Logo = (props) => {
  return (
    <img
      style={{ height: '100px', width: '255px' }}
      src="/images/logo.png"
      alt="Logo"
      {...props}
    />
  )
}

export default Logo
