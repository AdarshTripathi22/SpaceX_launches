import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [isBackground, setisBackground] = useState(false)
  const [isLine, setisLine] = useState(false)
  const changeBack = () => {
    setisBackground(!isBackground);
  }
  const line = () => {
    setisLine(!isLine);
  }

  return (
    // <!-- Navbar -->
<nav className="navbar navbar-expand-lg navbar-light bg-white p-4">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="/navbarSupportedContent"
      aria-controls="/navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a className="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/SpaceX_Logo_Black.png/1196px-SpaceX_Logo_Black.png?20190323084118"
          height="20"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <div className = "">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className = "d-flex justify-content-end">
          <li className="nav-item link">
            <a className="nav-link" onMouseOver={line} onMouseOut={line} style={{color: "black"}} href="/">Cases</a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" style={{color: "black"}} href="/">Services</a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" style={{color: "black"}} href="/">Industries</a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" style={{color: "black"}} href="/">Team Lunar</a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" style={{color: "black"}} href="/">Blog</a>
          </li>
        </div>
      </ul>
      </div>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div className="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <button className="btn" 
      style={{color: (isBackground) ? "black" : "white", backgroundColor: (isBackground) ? "white" : "black"}} 
      onMouseOver={changeBack}
      onMouseOut={changeBack}>
        Contact Us
      </button>
      {/* <!-- Notifications --> */}
      
      {/* <!-- Avatar --> */}
      
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
// <!-- Navbar -->
  )
}

export default Navbar