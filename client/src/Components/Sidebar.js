import React from 'react'

function Sidebar() {
  return (
    <>
 <div>
  <nav classname="sidebar sidebar-offcanvas" id="sidebar">
    <ul classname="nav">
      <li classname="nav-item nav-profile">
        <a href="/#" classname="nav-link">
          <div classname="nav-profile-image">
            <img src="assets/images/faces/face1.jpg" alt="profile" />
            <span classname="login-status online">
              {/* change to offline or busy as needed */}
            </span></div>
          <div classname="nav-profile-text d-flex flex-column">
            <span classname="font-weight-bold mb-2">David Grey. H</span>
            <span classname="text-secondary text-small">Project Manager</span>
          </div>
          <i classname="mdi mdi-bookmark-check text-success nav-profile-badge">
          </i></a><i classname="mdi mdi-bookmark-check text-success nav-profile-badge">
        </i></li><i classname="mdi mdi-bookmark-check text-success nav-profile-badge">
        <li classname="nav-item">
          <a classname="nav-link" href="index.html">
            <span classname="menu-title">Dashboard</span>
            <i classname="mdi mdi-home menu-icon">
            </i></a><i classname="mdi mdi-home menu-icon">
          </i></li><i classname="mdi mdi-home menu-icon">
          <li classname="nav-item">
            <a classname="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span classname="menu-title">Basic UI Elements</span>
              <i classname="menu-arrow">
                <i classname="mdi mdi-crosshairs-gps menu-icon">
                </i></i></a><i classname="menu-arrow"><i classname="mdi mdi-crosshairs-gps menu-icon">
                <div classname="collapse" id="ui-basic">
                  <ul classname="nav flex-column sub-menu">
                    <li classname="nav-item">
                      <a classname="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                    </li>
                    <li classname="nav-item">
                      <a classname="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                    </li>
                    <li classname="nav-item">
                      <a classname="nav-link" href="pages/ui-features/typography.html">Typography</a>
                    </li>
                  </ul>
                </div>
              </i></i></li><i classname="menu-arrow"><i classname="mdi mdi-crosshairs-gps menu-icon">
              <li classname="nav-item">
                <a classname="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                  <span classname="menu-title">Icons</span>
                  <i classname="mdi mdi-contacts menu-icon">
                  </i></a><i classname="mdi mdi-contacts menu-icon">
                  <div classname="collapse" id="icons">
                    <ul classname="nav flex-column sub-menu">
                      <li classname="nav-item">
                        <a classname="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                      </li>
                    </ul>
                  </div>
                </i></li><i classname="mdi mdi-contacts menu-icon">
                <li classname="nav-item">
                  <a classname="nav-link" data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms">
                    <span classname="menu-title">Forms</span>
                    <i classname="mdi mdi-format-list-bulleted menu-icon">
                    </i></a><i classname="mdi mdi-format-list-bulleted menu-icon">
                    <div classname="collapse" id="forms">
                      <ul classname="nav flex-column sub-menu">
                        <li classname="nav-item">
                          <a classname="nav-link" href="pages/forms/basic_elements.html">Form Elements</a>
                        </li>
                      </ul>
                    </div>
                  </i></li><i classname="mdi mdi-format-list-bulleted menu-icon">
                  <li classname="nav-item">
                    <a classname="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                      <span classname="menu-title">Charts</span>
                      <i classname="mdi mdi-chart-bar menu-icon">
                      </i></a><i classname="mdi mdi-chart-bar menu-icon">
                      <div classname="collapse" id="charts">
                        <ul classname="nav flex-column sub-menu">
                          <li classname="nav-item">
                            <a classname="nav-link" href="pages/charts/chartjs.html">ChartJs</a>
                          </li>
                        </ul>
                      </div>
                    </i></li><i classname="mdi mdi-chart-bar menu-icon">
                    <li classname="nav-item">
                      <a classname="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <span classname="menu-title">Tables</span>
                        <i classname="mdi mdi-table-large menu-icon">
                        </i></a><i classname="mdi mdi-table-large menu-icon">
                        <div classname="collapse" id="tables">
                          <ul classname="nav flex-column sub-menu">
                            <li classname="nav-item">
                              <a classname="nav-link" href="pages/tables/basic-table.html">Basic table</a>
                            </li>
                          </ul>
                        </div>
                      </i></li><i classname="mdi mdi-table-large menu-icon">
                      <li classname="nav-item">
                        <a classname="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                          <span classname="menu-title">User Pages</span>
                          <i classname="menu-arrow">
                            <i classname="mdi mdi-lock menu-icon">
                            </i></i></a><i classname="menu-arrow"><i classname="mdi mdi-lock menu-icon">
                            <div classname="collapse" id="auth">
                              <ul classname="nav flex-column sub-menu">
                                <li classname="nav-item">
                                  <a classname="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                                </li>
                                <li classname="nav-item">
                                  <a classname="nav-link" href="pages/samples/login.html"> Login </a>
                                </li>
                                <li classname="nav-item">
                                  <a classname="nav-link" href="pages/samples/register.html"> Register </a>
                                </li>
                                <li classname="nav-item">
                                  <a classname="nav-link" href="pages/samples/error-404.html"> 404 </a>
                                </li>
                                <li classname="nav-item">
                                  <a classname="nav-link" href="pages/samples/error-500.html"> 500 </a>
                                </li>
                              </ul>
                            </div>
                          </i></i></li><i classname="menu-arrow"><i classname="mdi mdi-lock menu-icon">
                          <li classname="nav-item">
                            <a classname="nav-link" href="docs/documentation.html" target="_blank">
                              <span classname="menu-title">Documentation</span>
                              <i classname="mdi mdi-file-document-box menu-icon">
                              </i></a><i classname="mdi mdi-file-document-box menu-icon">
                            </i></li><i classname="mdi mdi-file-document-box menu-icon">
                          </i></i></i></i></i></i></i></i></i></i></i></ul><i classname="mdi mdi-format-list-bulleted menu-icon"><i classname="mdi mdi-chart-bar menu-icon"><i classname="mdi mdi-table-large menu-icon"><i classname="menu-arrow"><i classname="mdi mdi-lock menu-icon"><i classname="mdi mdi-file-document-box menu-icon">
              </i></i></i></i></i></i></nav><i classname="mdi mdi-format-list-bulleted menu-icon"><i classname="mdi mdi-chart-bar menu-icon"><i classname="mdi mdi-table-large menu-icon"><i classname="menu-arrow"><i classname="mdi mdi-lock menu-icon"><i classname="mdi mdi-file-document-box menu-icon">
            </i></i></i></i></i></i></div>

    </>
  )
}

export default Sidebar
