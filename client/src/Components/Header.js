import React from 'react'

function Header() {
  return (
    <>
<div className="container-scroller" >
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
            <a classname="nav-link dropdown-toggle" id="profileDropdown" href="#/" data-bs-toggle="dropdown" aria-expanded="false">
              <div classname="nav-profile-img">
                <img src="assets/images/faces/face1.jpg" alt="{''}" />
                <span classname="availability-status online">
                </span></div>
              <div classname="nav-profile-text">
                <p classname="mb-1 text-black">David Greymaax</p>
              </div>
            </a>
            <div classname="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
              <a classname="dropdown-item" href="#/">
                <i classname="mdi mdi-cached me-2 text-success"> Activity Log </i></a><i classname="mdi mdi-cached me-2 text-success">
                <div classname="dropdown-divider">
                  <a classname="dropdown-item" href="#/">
                    <i classname="mdi mdi-logout me-2 text-primary"> Signout </i></a><i classname="mdi mdi-logout me-2 text-primary">
                  </i></div><i classname="mdi mdi-logout me-2 text-primary">
                </i></i></div></li><i classname="mdi mdi-cached me-2 text-success"><i classname="mdi mdi-logout me-2 text-primary">
              <li classname="nav-item d-none d-lg-block full-screen-link">
                <a classname="nav-link" href="#/">
                  <i classname="mdi mdi-fullscreen" id="fullscreen-button">
                  </i></a><i classname="mdi mdi-fullscreen" id="fullscreen-button">
                </i></li><i classname="mdi mdi-fullscreen" id="fullscreen-button">
                <li classname="nav-item dropdown">
                  <a classname="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#/" data-bs-toggle="dropdown" aria-expanded="false">
                    <i classname="mdi mdi-email-outline">
                      <span classname="count-symbol bg-warning">
                      </span></i></a><i classname="mdi mdi-email-outline">
                    <div classname="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                      <h6 classname="p-3 mb-0">Messages</h6>
                      <div classname="dropdown-divider">
                        <a classname="dropdown-item preview-item" href="#/">
                          <div classname="preview-thumbnail">
                            <img src="assets/images/faces/face4.jpg" alt={''} classname="profile-pic" />
                          </div>
                          <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 classname="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                            <p classname="text-gray mb-0"> 1 Minutes ago </p>
                          </div>
                        </a>
                        <div classname="dropdown-divider">
                          <a classname="dropdown-item preview-item" href="#/">
                            <div classname="preview-thumbnail">
                              <img src="assets/images/faces/face2.jpg" alt={''} classname="profile-pic" />
                            </div>
                            <div classname="preview-item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 classname="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                              <p classname="text-gray mb-0"> 15 Minutes ago </p>
                            </div>
                          </a>
                          <div classname="dropdown-divider">
                            <a classname="dropdown-item preview-item" href="#/">
                              <div classname="preview-thumbnail">
                                <img src="assets/images/faces/face3.jpg" alt={''} classname="profile-pic" />
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
                    <a classname="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#/" data-bs-toggle="dropdown">
                      <i classname="mdi mdi-bell-outline">
                        <span classname="count-symbol bg-danger">
                        </span></i></a><i classname="mdi mdi-bell-outline">
                      <div classname="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                        <h6 classname="p-3 mb-0">Notifications</h6>
                        <div classname="dropdown-divider">
                          <a classname="dropdown-item preview-item" href="#/">
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
                              <a classname="dropdown-item preview-item" href="#/">
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
                                  <a classname="dropdown-item preview-item" href="#/">
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
                            <a classname="nav-link" href="#/">
                              <i classname="mdi mdi-power">
                              </i></a><i classname="mdi mdi-power">
                            </i></li><i classname="mdi mdi-power">
                            <li classname="nav-item nav-settings d-none d-lg-block">
                              <a classname="nav-link" href="#/">
                                <i classname="mdi mdi-format-line-spacing">
                                </i></a><i classname="mdi mdi-format-line-spacing">
                              </i></li><i classname="mdi mdi-format-line-spacing">
                            </i></i></i></i></i></i></i></i></i></i></ul><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
                      <button classname="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span classname="mdi mdi-menu">
                        </span></button>
                    </i></i></i></i></i></i></i></i></div><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
                </i></i></i></i></i></i></i></nav><i classname="mdi mdi-fullscreen" id="fullscreen-button"><i classname="mdi mdi-bell-outline"><i classname="mdi mdi-calendar"><i classname="mdi mdi-cog"><i classname="mdi mdi-link-variant"><i classname="mdi mdi-power"><i classname="mdi mdi-format-line-spacing">
              </i></i></i></i></i></i></i>
             </div>

    </>
  )
}

export default Header
