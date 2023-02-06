import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
//import AboutPage from "./pages/About Us";
//import CheckoutPage from "./pages/Checkout";
import CartPage from "./pages/Cart";
import DetailProduct from "./components/DetailProduct";
import ContactPage from "./pages/Contact";
import BlogsPage from "./pages/Blogs";
import DetailBlog from "./components/DetailBlog";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import Footer from "../src/common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./components/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./components/Auth";
import AboutPage from "./pages/About Us";
import Pay from "./components/Pay";
import AuthRegister from "./components/register";
import Profile from "./pages/Profile/index.js";
import MyData from "./pages/Profile/MyData";
import jwt_decode from "jwt-decode";
import PrivaitRoute from "./components/PrivaitRoute";
export default function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="w-[100%]">
        <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <NavbarModal
          setNavBarModal={setNavBarModal}
          navbarModal={navBarModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setNavBarModal={setNavBarModal}
                navbarModal={navBarModal}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                setNavBarModal={setNavBarModal}
                navbarModal={navBarModal}
              />
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/:category" element={<ShopPage />} />
          <Route
            path="/account/*"
            element={
              <PrivaitRoute>
                <Profile />
              </PrivaitRoute>
            }
          />
          <Route
            path="/:category/:id"
            element={<DetailProduct setNavBarModal={setNavBarModal} />}
          />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}
/* 
<Footer />
*/

// <Route
//   path="/:category"
//   element={
//     <ShopPage addToCart={addToCart} setNavBarModal={setNavBarModal} />
//   }
// />
// <Route
//   path="/blogs/:id"
//   element={<DetailBlog setNavBarModal={setNavBarModal} />}
// />
// <Route
//   path="/blogs"
//   element={<BlogsPage page="blogs" setNavBarModal={setNavBarModal} />}
// />
// <Route
//   path="/contact"
//   element={<ContactPage setNavBarModal={setNavBarModal} />}
// />
// <Route
//   path="/:category/:id"
//   element={
//     <DetailProduct
//       addToCart={addToCart}
//       updateQuantity={updateQuantity}
//       setNavBarModal={setNavBarModal}
//     />
//   }
// />
//
// <Route path="/about" element={<AboutPage />} />
// <Route
//   path="/cart"
//   element={<CartPage cart={cart} updateQuantity={updateQuantity} />}
// />
// <Route path="/checkout" element={<Pay />} />
