import React from 'react'

// import PropTypes from 'prop-types'

import logo from '../../../assets/images/logo.jpeg'

import './index.css'

const Header = () => (
  <div className='header'>
    <img alt='logo' src={logo} style={{ width: 100, height: 80, objectFit: 'cover' }} />
  </div>
)

Header.propTypes = {
  // children: PropTypes.node
}

export default Header