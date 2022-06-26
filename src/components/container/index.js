import React from 'react'

import PropTypes from 'prop-types'

import './index.css'

const Container = ({ children }) => (
  <div className='container'>{children}</div>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container