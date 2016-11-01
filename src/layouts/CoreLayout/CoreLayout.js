import React from 'react'
import TopMenu from '../../components/TopMenu/TopMenu'
import SideMenu from '../../components/SideMenu/SideMenu'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div id='outer-container'>
    <SideMenu />
    <main id='page-wrap'>
      <TopMenu />
      {children}
    </main>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
