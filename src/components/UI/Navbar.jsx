import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./styleNavbar.scss";
import createGlobe from "cobe";


const Navbar = () => {
  const [nemo, setNemo] = useState(true);
  
  return (
    <>
      <header>
        <div className="container">
          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-expand-lg shadow-none">
            {/* <!-- Container wrapper --> */}
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list-nested openNavMenuu"></i>
              {/* <i class="bi bi-x-lg closenavMenu"></i> */}
            </button>
            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- Navbar brand --> */}
              <NavLink className= "navbar-brand mt-2 mt-lg-0" to="/">
                <h2 className="logoText">Logo</h2>
              </NavLink>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? "navLinkActive nav-link" : "nav-link"}  to="/news">
                    Biz haqimizda
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? "navLinkActive nav-link" : "nav-link"} to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? "navLinkActive nav-link" : "nav-link"} to="/home">
                    Xizmatlarimiz
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? "navLinkActive nav-link" : "nav-link"} to="/home">
                    Buyurtma berish
                  </NavLink>
                </li>
                <li className="nav-item smMenuTellWrapp">
                  <a className="nav-link smMenuTell" href="#">
                    (99) 999 9999
                  </a>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
            {/* <!-- Right elements --> */}
            <div className="dropdown">
              <h2 className="logoText2">Logo</h2>
            </div>

            {/* theme change */}
            <div className="theme">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="label">
                <i className="bi bi-brightness-high fa-sun"></i>
                <i className="bi bi-moon fa-moon"></i>
                <div className="ball"></div>
              </label>
            </div>
            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <span className="navAdressWrapp">
                <a href="tel:+998 90 777-77-77" className="navTell">
                  +998 90 777-77-77
                </a>
                <a href="mailto:chotatam@gmail.com" className="navGmail">
                  chotatam@gmail.com
                </a>
              </span>
            </div>

            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <a href="tel:+998 90 777-77-77" className="navTellBtn">
                Murojat uchun:
              </a>
            </div>

            {/* <!-- Right elements --> */}
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Navbar --> */}
        </div>
      </header>

  
    </>
  );
};

export default Navbar;
