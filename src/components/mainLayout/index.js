import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'

import './index.css'

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div className='body'>
      {children}
    </div>
  </div>
)

MainLayout.propTypes ={
  children: PropTypes.node
}

export default MainLayout