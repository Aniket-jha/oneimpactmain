/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} width="250px" src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} width="250px" src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
              <li className="nav-item">
              <Link href={`/About`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
              {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Work
              </span>
              <div className="dropdown-menu">
               
                <Link href={`/work/statics`}>
                  <a className="dropdown-item">Statics</a>
                </Link>
                <Link href={`/work/reels`}>
                  <a className="dropdown-item">Reels</a>
                </Link>
                <Link href={`/work/production`}>
                  <a className="dropdown-item">Production</a>
                </Link>
                
              </div>
            </li> */}
            
              <li className="nav-item">
              <Link href={`/services`}>
                <a className="nav-link">Service</a>
              </Link>
            </li>
              <l className="nav-item">
              <Link href={`/blog`}>
                <a className="nav-link">Blog</a>
              </Link>
            </l>
            <li className="nav-item">
              <a href="https://cdn.sanity.io/files/p67wd3hf/production/ed39fe3295f3055be3ea05493e969c3baeaa3d36.pdf">
                <a className="nav-link">Work</a>
              </a>
            </li>
            <li className="nav-item">
              <Link href={`/contact`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
             <li className="nav-item">
              <Link href={`/Team`}>
                <a className="nav-link">Team</a>
              </Link>
            </li>
             <li className="nav-item">
              <Link href={`/Clients`}>
                <a className="nav-link">Clients</a>
              </Link>
            </li>
              <li className="nav-item">
              <Link href={`/career`}>
                <a className="nav-link">Career</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
