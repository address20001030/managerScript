import React from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import Footer from '../component/footer/Footer'
import Addscript from '../component/AddScript/Addscript'
import Nav from '../component/Nav/Nav'

function PageAdd() {
  return (
    <div className='hold-transition sidebar-mini'>
    <div className='wrapper'>
        <Nav/>
        <Sidebar/>
        <Addscript/>
        <Footer/>
    </div>
  </div>
  )
}

export default PageAdd