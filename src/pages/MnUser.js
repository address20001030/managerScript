
import Footer from '../component/footer/Footer'
import Nav from '../component/Nav/Nav'
import Sidebar from '../component/Sidebar/Sidebar'
import Table from '../component/Table/Table'


function MnUser() {
    


  return (
    <div className='hold-transition sidebar-mini'>
    <div className='wrapper'>
        <Nav/>
        <Sidebar/>
        <Table/>
        <Footer/>
    </div>
  </div>
  )
}

export default MnUser