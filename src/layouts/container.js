import React from 'react'

// layout
import Header from '../components/header'

export default ({ children }) =>
  <div>
    <Header />
    <div style={{margin: 'auto', maxWidth: 760}}>
      { children }
    </div>
  </div>