import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { apiAccount } from '../../api/account';

function Sidebar() {
  const [dataInfo, setDataInfo] = useState("");
  const getUserInfo = async()=>{
    
      const res = await apiAccount.getInfo();
      setDataInfo(res.username);
      localStorage.setItem("username",res.username);
  };

  useEffect(()=>{
    getUserInfo();
  },[]);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

    <a href="/home" className="brand-link">
      <img src="images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
      <span className="brand-text font-weight-light">ADMIN</span>
    </a>

    <div className="sidebar">

      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
             <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="/home" className="d-block">{dataInfo}</a>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
   


          <li className="nav-item">
            <a href='/home' className="nav-link">
              <i className="nav-icon fas fa-table"></i>
              <p>
                  Manager
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">

              <li className="nav-item">
                <Link to='/users' className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>All Script</p>
                </Link>
                <Link to='/add-script' className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add Script</p>
                </Link>
              </li>
             
            </ul>
          </li>
          <li className='nav-item'>
            <a href='/log-out' className='nav-link'> <i className="nav-icon fa fa-times"></i>Logout
            </a>
          </li>
        </ul>
      </nav>
  
    </div>

  </aside>
  )
}

export default Sidebar