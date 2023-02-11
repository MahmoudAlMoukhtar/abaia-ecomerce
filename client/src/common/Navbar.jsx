import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {IoPersonOutline} from "react-icons/io5";
import {FiShoppingCart, FiSearch, FiHeart} from "react-icons/fi";
import {useLangauges} from "../contexts/Langauges";
import jwt_decode from "jwt-decode";
import * as api from "../api/index";
const activeStyle = {
  color: "white",
  backgroundColor: "black",
  padding: "8px",
  borderRadius: "4px",
  color: "white",
  fontWeight: "bold",
  transition: "2s",
};

const styles = {
  linkPages: "p-[8px]  transition duration-100 borderr",
};

const Navbar = ({
  cartProducts,
  favoraitProducts,
  setNavBarModal,
  navbarModal,
}) => {
  const langaugesContext = useLangauges();
  const [countCartProducts, setCountCartProducts] = useState();
  const [countFavProducts, setCountFavProducts] = useState();
  const navigait = useNavigate();
  useEffect(() => {
    const userJson = localStorage.getItem("userEcommerce");
    if (!userJson) {
      setCountFavProducts(0);
      setCountCartProducts(0);
    } else {
      const user = jwt_decode(
        JSON.parse(localStorage.getItem("userEcommerce")).token
      );
      const fun = async () => {
        const {data} = await api.fetchCart();
        setCountCartProducts(data.length);
        const res = await api.fetchFavoraitProducts(user.id);
        //console.log(res.data);
        setCountFavProducts(res.data.length);
      };
      fun();
    }
  }, [cartProducts, favoraitProducts]);
  return (
    <nav
      className={
        langaugesContext.langauge === "ar"
          ? "flex flex-row-reverse justify-between items-center p-8 py-4 w-[100%]"
          : "flex flex-row justify-between items-center p-8 py-4 w-[100%]"
      }
    >
      <HiMenuAlt1
        size={30}
        onClick={() => setNavBarModal(!navbarModal)}
        className="cursor-pointer static block lg:absolute lg:hidden"
      />
      <Link to="/" className="flex">
        <h6 className="text-2xl text-center">MELISSIA</h6>
      </Link>
      <ul
        className={
          langaugesContext.langauge === "ar"
            ? "hidden absolute lg:flex lg:static flex-row-reverse font-semibold  text-sm sm:text-md gap-x-2  sm:items-center sm:gap-x-2 md:gap-x-8 "
            : "hidden absolute lg:flex lg:static flex-row font-semibold  text-sm sm:text-md gap-x-2  sm:items-center sm:gap-x-2 md:gap-x-8 "
        }
      >
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
          {langaugesContext.langauge === "ar" ? "منتجات جديدة" : "New products"}
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/account"
          className={styles.linkPages}
        >
          {langaugesContext.langauge === "ar" ? "حسابي" : "My Account"}
        </NavLink>
      </ul>
      <div className="flex items-center  gap-4">
        {langaugesContext.langauge === "ar" ? (
          <button
            className="font-semibold hidden absolute sm:flex sm:static"
            onClick={() => langaugesContext.setLangauge("eng")}
          >
            Eng
          </button>
        ) : (
          <button
            className="font-semibold hidden absolute sm:flex sm:static"
            onClick={() => langaugesContext.setLangauge("ar")}
          >
            Ar
          </button>
        )}
        <NavLink
          to="/auth"
          className="hidden absolute sm:flex sm:static cursor-pointer"
        >
          <IoPersonOutline size={18} />
        </NavLink>
        <NavLink
          to="/search"
          className="hidden absolute sm:flex sm:static cursor-pointer"
        >
          <FiSearch size={18} onClick={() => console.log("search")} />
        </NavLink>
        <NavLink
          to="/cart"
          className={"relative text-white hover:text-white rounded-full"}
        >
          <span className="absolute top-[-10px] right-[-6px] bg-black rounded-full text-[8px] px-[6px] py-[3px] font-bold">
            {countCartProducts}
          </span>
          <FiShoppingCart color="black" size={18} />
        </NavLink>
        <NavLink
          to="/account/favorait"
          className={"relative text-white hover:text-white rounded-full"}
        >
          <FiHeart size={18} color="black" />
          <span className="absolute top-[-10px] right-[-6px] bg-black rounded-full text-[8px] px-[6px] py-[3px] font-bold">
            {countFavProducts}
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
