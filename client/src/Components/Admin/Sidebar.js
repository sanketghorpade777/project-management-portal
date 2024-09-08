import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <>
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a href="/#" className="nav-link">
                <div className="nav-profile-image">
                  <img src="assets/images/faces/face1.jpg" alt="profile" />
                  <span className="login-status online" />
                  { /*change to offline or busy as needed*/ }
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-secondary text-small">Project Manager</span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-home menu-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Project</span>
                <i className="menu-arrow" />
                <i className="mdi mdi-crosshairs-gps menu-icon" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                  
                  
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/ui-features/dropdowns.html">New Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <span className="menu-title">Tasks</span>
                <i className="mdi mdi-contacts menu-icon" />
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
               
                    <Link to="/add-emp" className="nav-link">New Task</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms">
                <span className="menu-title">Clients</span>
                <i className="mdi mdi-format-list-bulleted menu-icon" />
              </a>
              <div className="collapse" id="forms">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/forms/basic_elements.html">New Client</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                <span className="menu-title">Employee</span>
                <i className="mdi mdi-chart-bar menu-icon" />
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    
                    <Link to="/add-emp" className="nav-link">New Employee</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                <span className="menu-title">sdsd</span>
                <i className="mdi mdi-table-large menu-icon" />
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow" />
                <i className="mdi mdi-lock menu-icon" />
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/login.html"> Login </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/register.html"> Register </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/documentation.html" target="_blank">
                <span className="menu-title">Documentation</span>
                <i className="mdi mdi-file-document-box menu-icon" />
              </a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Sidebar
