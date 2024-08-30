import React from 'react'

function Dashboard() {
  return (
    <>
      <div classname="container-scroller">
  <div classname="row p-0 m-0 proBanner" id="proBanner">
    <div classname="col-md-12 p-0 m-0">
      <div classname="card-body card-body-padding d-flex align-items-center justify-content-between">
        <div classname="ps-lg-3">
          <div classname="d-flex align-items-center justify-content-between">
            <p classname="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
            <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/" target="_blank" classname="btn me-2 buy-now-btn border-0">Buy Now</a>
          </div>
        </div>
        <div classname="d-flex align-items-center justify-content-between">
          <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/"><i classname="mdi mdi-home me-3 text-white" /></a><i classname="mdi mdi-home me-3 text-white">
            <button id="bannerClose" classname="btn border-0 p-0">
              <i classname="mdi mdi-close text-white mr-0">
              </i></button><i classname="mdi mdi-close text-white mr-0">
            </i></i></div><i classname="mdi mdi-home me-3 text-white"><i classname="mdi mdi-close text-white mr-0">
          </i></i></div><i classname="mdi mdi-home me-3 text-white"><i classname="mdi mdi-close text-white mr-0">
        </i></i></div><i classname="mdi mdi-home me-3 text-white"><i classname="mdi mdi-close text-white mr-0">
      </i></i></div><i classname="mdi mdi-home me-3 text-white"><i classname="mdi mdi-close text-white mr-0">
      {'{'} /* partial:partials/_navbar.html */ {'}'}
      <nav classname="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div classname="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <a classname="navbar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
          <a classname="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div classname="navbar-menu-wrapper d-flex align-items-stretch">
          <button classname="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span classname="mdi mdi-menu">
            </span></button>
          <div classname="search-field d-none d-md-block">
            <form classname="d-flex align-items-center h-100" action="#">
              <div classname="input-group">
                <div classname="input-group-prepend bg-transparent">
                  <i classname="input-group-text border-0 mdi mdi-magnify">
                  </i></div><i classname="input-group-text border-0 mdi mdi-magnify">
                  <input type="text" classname="form-control bg-transparent border-0" placeholder="Search projects" />
                </i></div><i classname="input-group-text border-0 mdi mdi-magnify">
              </i></form></div><i classname="input-group-text border-0 mdi mdi-magnify">
            <ul classname="navbar-nav navbar-nav-right">
              <li classname="nav-item nav-profile dropdown">
                <a classname="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <div classname="nav-profile-img">
                    <img src="assets/images/faces/face1.jpg" alt="image" />
                    <span classname="availability-status online">
                    </span></div>
                  <div classname="nav-profile-text">
                    <p classname="mb-1 text-black">David Greymaax</p>
                  </div>
                </a>
                <div classname="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                  <a classname="dropdown-item" href="#">
                    <i classname="mdi mdi-cached me-2 text-success"> Activity Log </i></a><i classname="mdi mdi-cached me-2 text-success">
                    <div classname="dropdown-divider">
                      <a classname="dropdown-item" href="#">
                        <i classname="mdi mdi-logout me-2 text-primary"> Signout </i></a><i classname="mdi mdi-logout me-2 text-primary">
                      </i></div><i classname="mdi mdi-logout me-2 text-primary">
                    </i></i></div></li><i classname="mdi mdi-cached me-2 text-success"><i classname="mdi mdi-logout me-2 text-primary">
                  <li classname="nav-item d-none d-lg-block full-screen-link">
                    <a classname="nav-link">
                      <i classname="mdi mdi-fullscreen" id="fullscreen-button">
                      </i></a><i classname="mdi mdi-fullscreen" id="fullscreen-button">
                    </i></li><i classname="mdi mdi-fullscreen" id="fullscreen-button">
                    <li classname="nav-item dropdown">
                      <a classname="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <i classname="mdi mdi-email-outline">
                          <span classname="count-symbol bg-warning">
                          </span></i></a><i classname="mdi mdi-email-outline">
                        <div classname="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                          <h6 classname="p-3 mb-0">Messages</h6>
                          <div classname="dropdown-divider">
                            <a classname="dropdown-item preview-item">
                              <div classname="preview-thumbnail">
                                <img src="assets/images/faces/face4.jpg" alt="image" classname="profile-pic" />
                              </div>
                              <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                <h6 classname="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                <p classname="text-gray mb-0"> 1 Minutes ago </p>
                              </div>
                            </a>
                            <div classname="dropdown-divider">
                              <a classname="dropdown-item preview-item">
                                <div classname="preview-thumbnail">
                                  <img src="assets/images/faces/face2.jpg" alt="image" classname="profile-pic" />
                                </div>
                                <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                  <h6 classname="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                  <p classname="text-gray mb-0"> 15 Minutes ago </p>
                                </div>
                              </a>
                              <div classname="dropdown-divider">
                                <a classname="dropdown-item preview-item">
                                  <div classname="preview-thumbnail">
                                    <img src="assets/images/faces/face3.jpg" alt="image" classname="profile-pic" />
                                  </div>
                                  <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 classname="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                    <p classname="text-gray mb-0"> 18 Minutes ago </p>
                                  </div>
                                </a>
                                <div classname="dropdown-divider">
                                  <h6 classname="p-3 mb-0 text-center">4 new messages</h6>
                                </div>
                              </div></div></div></div></i></li><i classname="mdi mdi-email-outline">
                      <li classname="nav-item dropdown">
                        <a classname="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                          <i classname="mdi mdi-bell-outline">
                            <span classname="count-symbol bg-danger">
                            </span></i></a><i classname="mdi mdi-bell-outline">
                          <div classname="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <h6 classname="p-3 mb-0">Notifications</h6>
                            <div classname="dropdown-divider">
                              <a classname="dropdown-item preview-item">
                                <div classname="preview-thumbnail">
                                  <div classname="preview-icon bg-success">
                                    <i classname="mdi mdi-calendar">
                                    </i></div><i classname="mdi mdi-calendar">
                                  </i></div><i classname="mdi mdi-calendar">
                                  <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 classname="preview-subject font-weight-normal mb-1">Event today</h6>
                                    <p classname="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                  </div>
                                </i></a><i classname="mdi mdi-calendar">
                                <div classname="dropdown-divider">
                                  <a classname="dropdown-item preview-item">
                                    <div classname="preview-thumbnail">
                                      <div classname="preview-icon bg-warning">
                                        <i classname="mdi mdi-cog">
                                        </i></div><i classname="mdi mdi-cog">
                                      </i></div><i classname="mdi mdi-cog">
                                      <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 classname="preview-subject font-weight-normal mb-1">Settings</h6>
                                        <p classname="text-gray ellipsis mb-0"> Update dashboard </p>
                                      </div>
                                    </i></a><i classname="mdi mdi-cog">
                                    <div classname="dropdown-divider">
                                      <a classname="dropdown-item preview-item">
                                        <div classname="preview-thumbnail">
                                          <div classname="preview-icon bg-info">
                                            <i classname="mdi mdi-link-variant">
                                            </i></div><i classname="mdi mdi-link-variant">
                                          </i></div><i classname="mdi mdi-link-variant">
                                          <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 classname="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                            <p classname="text-gray ellipsis mb-0"> New admin wow! </p>
                                          </div>
                                        </i></a><i classname="mdi mdi-link-variant">
                                        <div classname="dropdown-divider">
                                          <h6 classname="p-3 mb-0 text-center">See all notifications</h6>
                                        </div>
                                      </i></div></i></div></i></div></div></i></li><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant">
                              <li classname="nav-item nav-logout d-none d-lg-block">
                                <a classname="nav-link" href="#">
                                  <i classname="mdi mdi-power">
                                  </i></a><i classname="mdi mdi-power">
                                </i></li><i classname="mdi mdi-power">
                                <li classname="nav-item nav-settings d-none d-lg-block">
                                  <a classname="nav-link" href="#">
                                    <i classname="mdi mdi-format-line-spacing">
                                    </i></a><i classname="mdi mdi-format-line-spacing">
                                  </i></li><i classname="mdi mdi-format-line-spacing">
                                </i></i></i></i></i></i></i></i></i></i></ul><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
                          <button classname="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span classname="mdi mdi-menu">
                            </span></button>
                        </i></i></i></i></i></i></i></i></div><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
                    </i></i></i></i></i></i></i></nav><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
                     {/* partial  */}
                    <div classname="container-fluid page-body-wrapper"></div>
                   {/* partial:partials/_sidebar.html  */}
                      <nav classname="sidebar sidebar-offcanvas" id="sidebar">
                        <ul classname="nav">
                          <li classname="nav-item nav-profile">
                            <a href="#" classname="nav-link">
                              <div classname="nav-profile-image">
                                <img src="assets/images/faces/face1.jpg" alt="profile" />
                                <span classname="login-status online">
                                  {'{'} /*change to offline or busy as needed*/ {'}'}
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
                                 {/* partial  */}
                                  <div classname="main-panel">
                                    <div classname="content-wrapper">
                                      <div classname="page-header">
                                        <h3 classname="page-title">
                                          <span classname="page-title-icon bg-gradient-primary text-white me-2">
                                            <i classname="mdi mdi-home">
                                            </i></span><i classname="mdi mdi-home"> Dashboard
                                          </i></h3><i classname="mdi mdi-home">
                                          <nav aria-label="breadcrumb">
                                            <ul classname="breadcrumb">
                                              <li classname="breadcrumb-item active" aria-current="page">
                                                <span>Overview <i classname="mdi mdi-alert-circle-outline icon-sm text-primary align-middle">
                                                  </i></span></li><i classname="mdi mdi-alert-circle-outline icon-sm text-primary align-middle">
                                              </i></ul><i classname="mdi mdi-alert-circle-outline icon-sm text-primary align-middle">
                                            </i></nav><i classname="mdi mdi-alert-circle-outline icon-sm text-primary align-middle">
                                          </i></i></div><i classname="mdi mdi-home"></i><i classname="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                                          <div classname="row">
                                            <div classname="col-md-4 stretch-card grid-margin">
                                              <div classname="card bg-gradient-danger card-img-holder text-white">
                                                <div classname="card-body">
                                                  <img src="assets/images/dashboard/circle.svg" classname="card-img-absolute" alt="circle-image" />
                                                  <h4 classname="font-weight-normal mb-3">Weekly Sales <i classname="mdi mdi-chart-line mdi-24px float-end">
                                                    </i></h4><i classname="mdi mdi-chart-line mdi-24px float-end">
                                                    <h2 classname="mb-5">$ 15,0000</h2>
                                                    <h6 classname="card-text">Increased by 60%</h6>
                                                  </i></div><i classname="mdi mdi-chart-line mdi-24px float-end">
                                                </i></div><i classname="mdi mdi-chart-line mdi-24px float-end">
                                              </i></div><i classname="mdi mdi-chart-line mdi-24px float-end">
                                              <div classname="col-md-4 stretch-card grid-margin">
                                                <div classname="card bg-gradient-info card-img-holder text-white">
                                                  <div classname="card-body">
                                                    <img src="assets/images/dashboard/circle.svg" classname="card-img-absolute" alt="circle-image" />
                                                    <h4 classname="font-weight-normal mb-3">Weekly Orders <i classname="mdi mdi-bookmark-outline mdi-24px float-end">
                                                      </i></h4><i classname="mdi mdi-bookmark-outline mdi-24px float-end">
                                                      <h2 classname="mb-5">45,6334</h2>
                                                      <h6 classname="card-text">Decreased by 10%</h6>
                                                    </i></div><i classname="mdi mdi-bookmark-outline mdi-24px float-end">
                                                  </i></div><i classname="mdi mdi-bookmark-outline mdi-24px float-end">
                                                </i></div><i classname="mdi mdi-bookmark-outline mdi-24px float-end">
                                                <div classname="col-md-4 stretch-card grid-margin">
                                                  <div classname="card bg-gradient-success card-img-holder text-white">
                                                    <div classname="card-body">
                                                      <img src="assets/images/dashboard/circle.svg" classname="card-img-absolute" alt="circle-image" />
                                                      <h4 classname="font-weight-normal mb-3">Visitors Online <i classname="mdi mdi-diamond mdi-24px float-end">
                                                        </i></h4><i classname="mdi mdi-diamond mdi-24px float-end">
                                                        <h2 classname="mb-5">95,5741</h2>
                                                        <h6 classname="card-text">Increased by 5%</h6>
                                                      </i></div><i classname="mdi mdi-diamond mdi-24px float-end">
                                                    </i></div><i classname="mdi mdi-diamond mdi-24px float-end">
                                                  </i></div><i classname="mdi mdi-diamond mdi-24px float-end">
                                                </i></i></i></div><i classname="mdi mdi-chart-line mdi-24px float-end"><i classname="mdi mdi-bookmark-outline mdi-24px float-end"><i classname="mdi mdi-diamond mdi-24px float-end">
                                                <div classname="row">
                                                  <div classname="col-md-7 grid-margin stretch-card">
                                                    <div classname="card">
                                                      <div classname="card-body">
                                                        <div classname="clearfix">
                                                          <h4 classname="card-title float-start">Visit And Sales Statistics</h4>
                                                          <div id="visit-sale-chart-legend" classname="rounded-legend legend-horizontal legend-top-right float-end">
                                                          </div>
                                                          <canvas id="visit-sale-chart" classname="mt-4">
                                                          </canvas></div>
                                                      </div>
                                                    </div>
                                                    <div classname="col-md-5 grid-margin stretch-card">
                                                      <div classname="card">
                                                        <div classname="card-body">
                                                          <h4 classname="card-title">Traffic Sources</h4>
                                                          <div classname="doughnutjs-wrapper d-flex justify-content-center">
                                                            <canvas id="traffic-chart">
                                                            </canvas></div>
                                                          <div id="traffic-chart-legend" classname="rounded-legend legend-vertical legend-bottom-left pt-4">
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div classname="row">
                                                      <div classname="col-12 grid-margin">
                                                        <div classname="card">
                                                          <div classname="card-body">
                                                            <h4 classname="card-title">Recent Tickets</h4>
                                                            <div classname="table-responsive">
                                                              <table classname="table">
                                                                <thead>
                                                                  <tr>
                                                                    <th> Assignee </th>
                                                                    <th> Subject </th>
                                                                    <th> Status </th>
                                                                    <th> Last Update </th>
                                                                    <th> Tracking ID </th>
                                                                  </tr>
                                                                </thead>
                                                                <tbody>
                                                                  <tr>
                                                                    <td>
                                                                      <img src="assets/images/faces/face1.jpg" classname="me-2" alt="image" /> David Grey
                                                                    </td>
                                                                    <td> Fund is not recieved </td>
                                                                    <td>
                                                                      <label classname="badge badge-gradient-success">DONE</label>
                                                                    </td>
                                                                    <td> Dec 5, 2017 </td>
                                                                    <td> WD-12345 </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td>
                                                                      <img src="assets/images/faces/face2.jpg" classname="me-2" alt="image" /> Stella Johnson
                                                                    </td>
                                                                    <td> High loading time </td>
                                                                    <td>
                                                                      <label classname="badge badge-gradient-warning">PROGRESS</label>
                                                                    </td>
                                                                    <td> Dec 12, 2017 </td>
                                                                    <td> WD-12346 </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td>
                                                                      <img src="assets/images/faces/face3.jpg" classname="me-2" alt="image" /> Marina Michel
                                                                    </td>
                                                                    <td> Website down for one week </td>
                                                                    <td>
                                                                      <label classname="badge badge-gradient-info">ON HOLD</label>
                                                                    </td>
                                                                    <td> Dec 16, 2017 </td>
                                                                    <td> WD-12347 </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td>
                                                                      <img src="assets/images/faces/face4.jpg" classname="me-2" alt="image" /> John Doe
                                                                    </td>
                                                                    <td> Loosing control on server </td>
                                                                    <td>
                                                                      <label classname="badge badge-gradient-danger">REJECTED</label>
                                                                    </td>
                                                                    <td> Dec 3, 2017 </td>
                                                                    <td> WD-12348 </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div classname="row">
                                                      <div classname="col-lg-5 grid-margin stretch-card">
                                                        <div classname="card">
                                                          <div classname="card-body p-0 d-flex">
                                                            <div id="inline-datepicker" classname="datepicker datepicker-custom">
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div classname="col-lg-7 grid-margin stretch-card">
                                                          <div classname="card">
                                                            <div classname="card-body">
                                                              <h4 classname="card-title">Recent Updates</h4>
                                                              <div classname="d-flex">
                                                                <div classname="d-flex align-items-center me-4 text-muted font-weight-light">
                                                                  <i classname="mdi mdi-account-outline icon-sm me-2">
                                                                    <span>jack Menqu</span>
                                                                  </i></div><i classname="mdi mdi-account-outline icon-sm me-2">
                                                                  <div classname="d-flex align-items-center text-muted font-weight-light">
                                                                    <i classname="mdi mdi-clock icon-sm me-2">
                                                                      <span>October 3rd, 2018</span>
                                                                    </i></div><i classname="mdi mdi-clock icon-sm me-2">
                                                                  </i></i></div><i classname="mdi mdi-account-outline icon-sm me-2"><i classname="mdi mdi-clock icon-sm me-2">
                                                                  <div classname="row mt-3">
                                                                    <div classname="col-6 pe-1">
                                                                      <img src="assets/images/dashboard/img_1.jpg" classname="mb-2 mw-100 w-100 rounded" alt="image" />
                                                                      <img src="assets/images/dashboard/img_4.jpg" classname="mw-100 w-100 rounded" alt="image" />
                                                                    </div>
                                                                    <div classname="col-6 ps-1">
                                                                      <img src="assets/images/dashboard/img_2.jpg" classname="mb-2 mw-100 w-100 rounded" alt="image" />
                                                                      <img src="assets/images/dashboard/img_3.jpg" classname="mw-100 w-100 rounded" alt="image" />
                                                                    </div>
                                                                  </div>
                                                                  <div classname="d-flex mt-5 align-items-top">
                                                                    <img src="assets/images/faces/face3.jpg" classname="img-sm rounded-circle me-3" alt="image" />
                                                                    <div classname="mb-0 flex-grow">
                                                                      <h5 classname="me-2 mb-2">School Website - Authentication Module.</h5>
                                                                      <p classname="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                                                    </div>
                                                                    <div classname="ms-auto">
                                                                      <i classname="mdi mdi-heart-outline text-muted">
                                                                      </i></div><i classname="mdi mdi-heart-outline text-muted">
                                                                    </i></div><i classname="mdi mdi-heart-outline text-muted">
                                                                  </i></i></i></div><i classname="mdi mdi-account-outline icon-sm me-2"><i classname="mdi mdi-clock icon-sm me-2"><i classname="mdi mdi-heart-outline text-muted">
                                                                </i></i></i></div><i classname="mdi mdi-account-outline icon-sm me-2"><i classname="mdi mdi-clock icon-sm me-2"><i classname="mdi mdi-heart-outline text-muted">
                                                              </i></i></i></div><i classname="mdi mdi-account-outline icon-sm me-2"><i classname="mdi mdi-clock icon-sm me-2"><i classname="mdi mdi-heart-outline text-muted">
                                                            </i></i></i></div><i classname="mdi mdi-account-outline icon-sm me-2"><i classname="mdi mdi-clock icon-sm me-2"><i classname="mdi mdi-heart-outline text-muted">
                                                            <div classname="row">
                                                              <div classname="col-md-7 grid-margin stretch-card">
                                                                <div classname="card">
                                                                  <div classname="card-body">
                                                                    <h4 classname="card-title">Project Status</h4>
                                                                    <div classname="table-responsive">
                                                                      <table classname="table">
                                                                        <thead>
                                                                          <tr>
                                                                            <th> # </th>
                                                                            <th> Name </th>
                                                                            <th> Due Date </th>
                                                                            <th> Progress </th>
                                                                          </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                          <tr>
                                                                            <td> 1 </td>
                                                                            <td> Herman Beck </td>
                                                                            <td> May 15, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-success" role="progressbar" style={{}} width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td> 2 </td>
                                                                            <td> Messsy Adam </td>
                                                                            <td> Jul 01, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-danger" role="progressbar" style={{}} width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td> 3 </td>
                                                                            <td> John Richards </td>
                                                                            <td> Apr 12, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-warning" role="progressbar" style={{}} width: "90%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td> 4 </td>
                                                                            <td> Peter Meggik </td>
                                                                            <td> May 15, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-primary" role="progressbar" style={{}} width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td> 5 </td>
                                                                            <td> Edward </td>
                                                                            <td> May 03, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-danger" role="progressbar" style={{}} width: "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td> 5 </td>
                                                                            <td> Ronald </td>
                                                                            <td> Jun 05, 2015 </td>
                                                                            <td>
                                                                              <div classname="progress">
                                                                                <div classname="progress-bar bg-gradient-info" role="progressbar" style={{}} width: "65%" }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                                                </div>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div classname="col-md-5 grid-margin stretch-card">
                                                                <div classname="card">
                                                                  <div classname="card-body">
                                                                    <h4 classname="card-title text-dark">Todo List</h4>
                                                                    <div classname="add-items d-flex">
                                                                      <input type="text" classname="form-control todo-list-input" placeholder="What do you need to do today?" />
                                                                      <button classname="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                                                                    </div>
                                                                    <div classname="list-wrapper">
                                                                      <ul classname="d-flex flex-column-reverse todo-list todo-list-custom">
                                                                        <li>
                                                                          <div classname="form-check">
                                                                            <label classname="form-check-label">
                                                                              <input classname="checkbox" type="checkbox" /> Meeting with Alisa </label>
                                                                          </div>
                                                                          <i classname="remove mdi mdi-close-circle-outline">
                                                                          </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                          <li classname="completed">
                                                                            <div classname="form-check">
                                                                              <label classname="form-check-label">
                                                                                <input classname="checkbox" type="checkbox" defaultChecked="{true}" /> Call John </label>
                                                                            </div>
                                                                            <i classname="remove mdi mdi-close-circle-outline">
                                                                            </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                            <li>
                                                                              <div classname="form-check">
                                                                                <label classname="form-check-label">
                                                                                  <input classname="checkbox" type="checkbox" /> Create invoice </label>
                                                                              </div>
                                                                              <i classname="remove mdi mdi-close-circle-outline">
                                                                              </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                              <li>
                                                                                <div classname="form-check">
                                                                                  <label classname="form-check-label">
                                                                                    <input classname="checkbox" type="checkbox" /> Print Statements </label>
                                                                                </div>
                                                                                <i classname="remove mdi mdi-close-circle-outline">
                                                                                </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                                <li classname="completed">
                                                                                  <div classname="form-check">
                                                                                    <label classname="form-check-label">
                                                                                      <input classname="checkbox" type="checkbox" defaultChecked="{true}" /> Prepare for presentation </label>
                                                                                  </div>
                                                                                  <i classname="remove mdi mdi-close-circle-outline">
                                                                                  </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                                  <li>
                                                                                    <div classname="form-check">
                                                                                      <label classname="form-check-label">
                                                                                        <input classname="checkbox" type="checkbox" /> Pick up kids from school </label>
                                                                                    </div>
                                                                                    <i classname="remove mdi mdi-close-circle-outline">
                                                                                    </i></li><i classname="remove mdi mdi-close-circle-outline">
                                                                                  </i></i></i></i></i></i></ul><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                          </i></i></i></div><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                        </i></i></i></div><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                      </i></i></i></div><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                    </i></i></i></div><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                  </i></i></i></div><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                                </i></i></i></i></i></i></div><i classname="mdi mdi-clock icon-sm me-2"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline">
                                                            {'{'} /* content-wrapper ends */ {'}'}
                                                            {'{'} /* partial:partials/_footer.html */ {'}'}
                                                            <footer classname="footer">
                                                              <div classname="d-sm-flex justify-content-center justify-content-sm-between">
                                                                <span classname="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023 <a href="https://www.bootstrapdash.com/" target="_blank">BootstrapDash</a>. All rights reserved.</span>
                                                                <span classname="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i classname="mdi mdi-heart text-danger" /></span><i classname="mdi mdi-heart text-danger">
                                                                </i></div><i classname="mdi mdi-heart text-danger">
                                                              </i></footer><i classname="mdi mdi-heart text-danger">
                                                              {'{'} /* partial */ {'}'}
                                                            </i></i></i></i></i></div><i classname="mdi mdi-clock icon-sm me-2"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="mdi mdi-heart text-danger">
                                                            {'{'} /* main-panel ends */ {'}'}
                                                          </i></i></i></i></i></div><i classname="mdi mdi-clock icon-sm me-2"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="mdi mdi-heart text-danger">
                                                          {'{'} /* page-body-wrapper ends */ {'}'}
                                                        </i></i></i></i></i></i></i></i></i></i></div><i classname="mdi mdi-clock icon-sm me-2"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="remove mdi mdi-close-circle-outline"><i classname="mdi mdi-heart text-danger">
                                            </i></i></i></i></i></div></i></i></i></i></i></i></div></i></i></i></i></i></i></i></i></i></div>

 </>








    </>
  )
}

export default Dashboard
