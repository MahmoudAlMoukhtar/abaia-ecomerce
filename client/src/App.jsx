import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct/index";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import Footer from "../src/common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./components/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth";
import AboutPage from "./pages/About Us";
import AuthRegister from "./pages/Register/Register";
import Profile from "./pages/Profile/index.js";
import PrivaitRoute from "./components/PrivaitRoute";
import SearchPage from "./pages/ٍSearch/index";
import {LangaugesProvider} from "./contexts/Langauges";

const App = () => {
  const [navBarModal, setNavBarModal] = useState(false);
  const [cartProducts, setCartProducts] = useState();
  const [favoraitProducts, setFavoraitProducts] = useState();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="w-[100%]">
        <LangaugesProvider>
          <Navbar
            setNavBarModal={setNavBarModal}
            navbarModal={navBarModal}
            cartProducts={cartProducts}
            favoraitProducts={favoraitProducts}
          />
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
                  <Profile
                    favoraitProducts={favoraitProducts}
                    setFavoraitProducts={setFavoraitProducts}
                  />
                </PrivaitRoute>
              }
            />
            <Route
              path="/:category/:id"
              element={
                <DetailProduct
                  setNavBarModal={setNavBarModal}
                  favoraitProducts={favoraitProducts}
                  setFavoraitProducts={setFavoraitProducts}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <PrivaitRoute>
                  <CartPage
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                  />
                </PrivaitRoute>
              }
            />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Footer />
        </LangaugesProvider>
      </div>
    </React.Fragment>
  );
};

export default App;
