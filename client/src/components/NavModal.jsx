import React from "react";
import {NavLink} from "react-router-dom";
import {useLangauges} from "../contexts/Langauges";

const activeStyle = {
  color: "white",
  backgroundColor: "#000",
  padding: "8px",
  borderRadius: "4px",
  color: "white",
  fontWeight: "bold",
};

const styles = {
  linkPages: "p-[8px]  transition duration-100 borderr",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal, langauge, setLangauge}) => {
  const langaugesContext = useLangauges();
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
          >
            {langaugesContext.langauge === "ar" ? "الصفحة الرئيسية" : "Home"}
          </NavLink>

          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/كل المنتجات"
            className={styles.linkPages}
          >
            {langaugesContext.langauge === "ar" ? "الأقسام" : "Sections"}
          </NavLink>

          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/about"
            className={styles.linkPages}
          >
            {langaugesContext.langauge === "ar" ? "من نحن" : "About us"}
          </NavLink>

          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/منتجات جديدة"
            className={styles.linkPages}
          >
            {langaugesContext.langauge === "ar"
              ? "منتجات جديدة"
              : "New products"}
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/account"
            className={styles.linkPages}
          >
            {langaugesContext.langauge === "ar" ? "حسابي" : "My Account"}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
