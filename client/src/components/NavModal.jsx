import React from "react";
import {NavLink} from "react-router-dom";

const activeStyle = {
  color: "white",
  backgroundColor: "#eab308",
  padding: "8px",
  borderRadius: "4px",
  color: "black",
  fontWeight: "bold",
};

const styles = {
  linkPages:
    "hover:text-white p-[8px] hover:bg-[#eab308] hover:text-black hover:font-semibold hover:rounded-[4px]",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-center gap-12">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            Home
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/allProducts"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            Shop
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/about"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            About Us
          </NavLink>

          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/blogs"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/contact"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/Cart"
            className={
              "text-white hover:text-black hover:pb-1 border-b-4 border-yellow-500 link-nav bg-black p-2 rounded-full font-bold"
            }
            onClick={() => setNavBarModal(false)}
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-cart"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
