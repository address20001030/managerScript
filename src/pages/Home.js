import React from 'react';
import Main from '../component/Content/Main'
import Footer from '../component/footer/Footer'
import Nav from '../component/Nav/Nav'
import Sidebar from '../component/Sidebar/Sidebar'

function Home() {



  return (
      <div className='hold-transition sidebar-mini'>
        <div className='wrapper'>
            <Nav/>
            <Sidebar/>
            <Main/>
            <Footer/>
        </div>
      </div>
  )
}

export default Home